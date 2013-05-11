define([
  'ember',
  'ember-data',
  'templates'
], function(Ember, DS) {

  var App = Ember.Application.create();

  App.Store = DS.Store.extend({
    revision: 12,
    adapter: 'DS.FixtureAdapter'
  });

  return App;
});
