define(['ember', 'app/fixtures/posts'], function(Ember, posts) {
  return Ember.Route.extend({
    model: function(params) {
      return posts.findBy('id', params.post_id);
    }
  });
});
