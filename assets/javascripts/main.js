requirejs.config({
  urlArgs: 'b=' + ((new Date()).getTime()),
  shim: {
    'handlebars': {
      deps: [],
      exports: 'Handlebars'
    },
    'ember': {
      deps: ['handlebars', 'jquery'],
      exports: 'Ember'
    },
    'ember-data': {
      deps: ['ember'],
      exports: 'DS'
    }
  },
  paths: {
    'jquery': 'vendor/jquery',
    'handlebars': 'vendor/handlebars',
    'ember': 'vendor/ember',
    'ember-data': 'vendor/ember-data',
    'moment': 'vendor/moment',
    'showdown': 'vendor/showdown',
    'App': 'app/app',
    'controllers': 'app/controllers',
    'models': 'app/models',
    'routes': 'app/routes'
  }
});

require(['App'], function(App) {
  // Avoid auto-initialization of the app while we manage dependencies
  App.deferReadiness();

  require([
    'app/router',
    'models/Post',
    'models/fixtures/posts',
    'controllers/PostController'
  ], function(Router, Post, data, PostController) {
    // Configure the router
    Router();

    // Models
    App.Post = Post;
    App.Post.FIXTURES = data;

    // Controllers
    App.PostController = PostController;

    // Ready... go!
    App.advanceReadiness();
  });
});
