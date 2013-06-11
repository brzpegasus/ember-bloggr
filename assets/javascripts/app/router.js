define([
  'App',
  'routes/IndexRoute',
  'routes/PostsRoute'
], function(App, IndexRoute, PostsRoute) {
  
  return function() {
    App.Router.map(function() {
      this.resource('posts', function() {
        this.resource('post', { path: ':post_id' });
      });
      this.resource('about');
    });

    App.IndexRoute = IndexRoute;
    App.PostsRoute = PostsRoute;
  };
});
