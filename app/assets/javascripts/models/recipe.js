IWillCookThat.Models.Recipe = Backbone.Model.extend({
  urlRoot: '/api/recipes',

  reviews: function() {
    if (!this._reviews){
      this._reviews = new IWillCookThat.Collections.Reviews([],{ recipe: this.model});
    }

    return this._reviews;
  },

  parse: function(response){
    if (response.reviews) {
      this.reviews().set(response.reviews, {parse:true});
      delete response.reviews;
    }

    return response;
  },

  toJSON: function(){
    return { recipe: _.clone(this.attributes) };
  },

  saveFormData: function(formData,options){
    var method = this.isNew() ? "POST" : "PUT";
    var recipe = this;

    $.ajax({
      url: _.result(recipe, "url"),
      type: method,
      data: formData,
      processData: false,
      contentType: false,
      success: function(resp){
        recipe.set(recipe.parse(resp));
        recipe.trigger("sync", recipe, resp, options);
        options.success && options.success(recipe, resp, options);
      },
      error: function(resp) {
        options.error && options.error(recipe, resp, options);
      }
    });
  }
});
