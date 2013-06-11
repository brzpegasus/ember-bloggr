exports.config =
  minMimosaVersion: '0.12.6'
  template:
    handlebars:
      lib: require 'handlebars'
      helpers: ['app/templates/handlebars-helpers']
      ember:
        enabled: true
        path: 'ember'
    nameTransform: /.*\/templates?\//
  server:
    defaultServer:
      enabled: true
      onePager: true
    views:
      compileWith: 'handlebars'
      extension: 'hbs'