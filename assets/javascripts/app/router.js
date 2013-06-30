define([
  'app/routes/index_route',
  'app/routes/posts_route'
], function(IndexRoute, PostsRoute) {
  
  return function (App) {
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
