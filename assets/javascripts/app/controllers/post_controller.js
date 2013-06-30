define(['ember'], function(Ember) {
  return Ember.ObjectController.extend({
    isEditing: false,

    doneEditing: function() {
      this.set('isEditing', false);
    },

    edit: function() {
      this.set('isEditing', true);
    }
  });
});