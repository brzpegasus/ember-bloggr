define(['ember', 'moment', 'showdown'], function(Ember, moment, Showdown) {

  // Pretty dates
  Ember.Handlebars.registerBoundHelper('date', function(date) {
    return moment(date).fromNow();
  });

  // Markdown syntax
  var converter = new Showdown.converter();
  Ember.Handlebars.registerBoundHelper('markdown', function(input) {
    return new Handlebars.SafeString(converter.makeHtml(input));
  });
});
