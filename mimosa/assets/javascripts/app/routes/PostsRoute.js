define(['ember', 'models/Post'], function(Ember, Post) {
  return Ember.Route.extend({
    model: function() {
      return Post.find();
    }
  });
});
