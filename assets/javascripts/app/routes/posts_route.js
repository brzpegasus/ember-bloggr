define(['ember', 'app/fixtures/posts'], function(Ember, posts) {
  return Ember.Route.extend({
    model: function() {
      return posts;
    }
  });
});
