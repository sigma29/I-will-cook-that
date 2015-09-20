IWillCookThat.Views.RecipeIndex = Backbone.CompositeView.extend({
  template: JST['recipes/recipe_index'],

  initialize: function(options){
    this.folders = options.folders;
    this.listenTo(this.collection, "add", this.addRecipeSubview);
    this.listenTo(this.collection, "sync", this.render);
    this.collection.each(function(recipe){
      this.addRecipeSubview(recipe);
    }.bind(this));
  },

  render: function() {
    this.$el.html(this.template({recipes: this.collection }));
    this.attachSubviews();

    return this;
  },

  addRecipeSubview: function(recipe) {
    var recipeListView = new IWillCookThat.Views.RecipeListItem({
      model: recipe,
      folders: this.folders
    });
    this.addSubview("ul.my-recipe-index-item",recipeListView);
  }
});
