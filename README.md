# I-will-cook-that


Iwillcookthat is a recipe discovery site that lets users search, review, and save recipes. It is a single page web app built on Ruby on Rails with Backbone.js to handle the front end.   The core record types are [recipes](/app/models/recipe.rb), [reviews](/app/models/review.rb), and [folders](/app/models/folder.rb) where users can save recipes.  When a user saves a folder to a recipe, a [folderRecipe object](/app/models/folder_recipe.rb) is created linking the user's folder with the saved recipe.  When users log in, all their saved folders, linked folderRecipes and folders, as well as authored reviews and recipes are loaded into Backbone collections so that no additional server calls are necessary as the users navigate within their saved recipes and past activity.

When a recipe is retrieved from the database the associated reviews and review metadata such as average rating are displayed.  Using an [override to the parse method](/app/assets/javascripts/models/recipe.js) the reviews are stored in a review collection.  The [recipe show view] (/app/assets/javascripts/views/recipes/recipe_show.js) listens to changes in the collection and recalculates review metadata immediately, ensuring that it reflects changes the user has made. Similar listeners listening to changes in the users saved recipe collection ensure that the [saved recipe view] (/app/assets/javascripts/views/users/user_saved_recipes.js) is up-to-date as users create, delete and rename their folders.

[link][heroku]

[heroku]: http://iwillcookthat.com

## Minimum Viable Product
I-will-cook-that is a clone of Epicurious built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create recipes
- [x] Create reviews of recipes
- [x] Create folders of recipes
- [x] View recipes
- [x] View reviews associated with recipes
- [x] View recipe folders
- [x] search recipes by keyword/tag
- [x] View own reviews


## Design Docs
* [DB schema][schema]

[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Recipe Creation (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create recipes and reviews using
simple text forms in a Rails view. The most important part of this phase will
be pushing the app to Heroku and ensuring that everything works before moving on
to phase 2.

[Details][phase-one]

### Phase 2: Viewing Recipes, Reviews and Folders (~3 days)
I will add API routes to serve recipe, review, and folder data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to create recipes, folders, and reviews and view them
inside a single Backbone app.

[Details][phase-two]

### Phase 3: Images and Profile (~1-2 days)
 I plan to integrate Paperclip for file upload so
users can add images to recipes. I will also add a user profile view where users can update their settings and view their activity.

[Details][phase-three]

### Phase 4: Searching for Recipes (~1-2 days)
I'll add a `search` route to the Recipes controller that will find recipes by keyword tag.  On the Backbone side there will be a `SearchResults` composite view that includes the pre-existing RecipeItem subview. Results will be sorted by average rating and will be filterable by non-keyword tag.

[Details][phase-four]


### Bonus Features (TBD)
- [ ] Pagination
- [ ] Recommendations based on saved and reviewed recipes
- [ ] Google account authentication
- [ ] Google/Facebook sharing
- [ ] Multiple sessions/session management


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase4.md
[phase-four]: ./docs/phases/phase5.md
