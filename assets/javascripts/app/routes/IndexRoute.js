define(['ember'], function(Ember) {
  return Ember.Route.extend({
    redirect: function() {
      this.transitionTo('posts');
    }
  });
});
