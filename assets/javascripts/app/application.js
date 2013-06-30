define([
  'ember',
  'ember-data',
  'templates'
], function(Ember, DS) {

  var App = Ember.Application.create();

  // Avoid auto-initialization of the app while we load dependencies
  App.deferReadiness();

  App.Store = DS.Store.extend({
    revision: 12,
    adapter: 'DS.FixtureAdapter'
  });

  require([
    'app/router',
    'app/models/post',
    'app/fixtures/posts',
    'app/controllers/post_controller'
  ], function(router, Post, data, PostController) {
    // Configure the router
    router(App);

    // Models
    App.Post = Post;
    App.Post.FIXTURES = data;

    // Controllers
    App.PostController = PostController;

    App.advanceReadiness();
  });

  return App;
});
