define(['ember'], function(Ember) {
  return Ember.ObjectController.extend({
    isEditing: false,

    actions: {
      doneEditing: function() {
        this.set('isEditing', false);
      },

      edit: function() {
        this.set('isEditing', true);
      }
    }
  });
});
