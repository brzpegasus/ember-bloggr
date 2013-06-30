define(['ember', 'app/models/post'], function(Ember, Post) {
  return Ember.Route.extend({
    model: function() {
      return Post.find();
    }
  });
});
