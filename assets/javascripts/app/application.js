define([
  'ember',
  'templates'
], function(Ember) {

  var App = Ember.Application.create();

  // Avoid auto-initialization of the app while we load dependencies
  App.deferReadiness();

  require([
    'app/router',
    'app/controllers/post_controller'
  ], function(router, PostController) {
    // Configure the router
    router(App);

    // Controllers
    App.PostController = PostController;

    App.advanceReadiness();
  });

  return App;
});
