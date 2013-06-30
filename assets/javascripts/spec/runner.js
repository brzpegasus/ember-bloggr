requirejs.config({
  urlArgs: 'b=' + ((new Date()).getTime()),
  baseUrl: '/javascripts',
  shim: {
    'ember': {
      deps: ['handlebars', 'jquery'],
      exports: 'Ember'
    },
    'ember-data': {
      deps: ['ember'],
      exports: 'DS'
    },
    'vendor/mocha': {
      exports: 'mocha'
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

// Need to declare 'should' with 'var' to make it work with PhantomJS,
// but still make it accessible as a global object.
// (https://github.//com/chaijs/chai/issues/107)
var should;

require([
  'vendor/mocha',
  'vendor/chai'
], function (mocha, chai) {

  // Require '/testem.js' after Mocha has loaded so that results
  // can be reported back to the Testem server
  // (Mimosa will complain about not being able to find '/testem.js')
  require(['/testem.js'], function() {
    mocha.setup('bdd');
    should = chai.should();

    require(['spec/helpers/hbs'], function() {
      mocha.run();
    });
  });
});
