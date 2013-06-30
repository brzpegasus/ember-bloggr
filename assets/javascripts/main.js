requirejs.config({
  urlArgs: 'b=' + ((new Date()).getTime()),
  shim: {
    'ember': {
      deps: ['handlebars', 'jquery'],
      exports: 'Ember'
    },
    'ember-data': {
      deps: ['ember'],
      exports: 'DS'
    }
  },
  paths: {
    'jquery': 'vendor/jquery',
    'handlebars': 'vendor/handlebars',
    'ember': 'vendor/ember',
    'ember-data': 'vendor/ember-data',
    'moment': 'vendor/moment',
    'showdown': 'vendor/showdown'
  }
});

require(['app/application']);
