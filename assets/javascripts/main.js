requirejs.config({
  urlArgs: 'b=' + ((new Date()).getTime()),
  shim: {
    'ember': {
      deps: ['handlebars', 'jquery'],
      exports: 'Ember'
    }
  },
  paths: {
    'jquery': 'vendor/jquery',
    'handlebars': 'vendor/handlebars.runtime',
    'ember': 'vendor/ember',
    'moment': 'vendor/moment',
    'showdown': 'vendor/showdown'
  }
});

require(['app/application']);
