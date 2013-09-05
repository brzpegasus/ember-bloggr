define([
  'app/routes/index_route',
  'app/routes/posts_route',
  'app/routes/post_route'
], function(IndexRoute, PostsRoute, PostRoute) {

  return function (App) {
    App.Router.map(function() {
      this.resource('posts', function() {
        this.resource('post', { path: ':post_id' });
      });
      this.resource('about');
    });

    App.IndexRoute = IndexRoute;
    App.PostsRoute = PostsRoute;
    App.PostRoute = PostRoute;
  };
});
