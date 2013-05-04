(function (window) {
  var App = window.App = Ember.Application.create();

  App.Store = DS.Store.extend({
    revision: 12,
    adapter: 'DS.FixtureAdapter'
  });

  App.Router.map(function () {
    this.resource('posts', function() {
      this.resource('post', { path: ':post_id' });
    });
    this.resource('about');
  });

  // App.IndexRoute = Ember.Route.extend({
  //   model: function () {
  //     return ['red', 'yellow', 'blue'];
  //   }
  // });
})(this);
