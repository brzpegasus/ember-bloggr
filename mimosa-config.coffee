exports.config =
  minMimosaVersion: '0.3.12'
  modules: ['lint', 'testem-require', 'server', 'require', 'minify']
  template:
    handlebars:
      lib: require 'handlebars'
      helpers: ['app/helpers/hbs']
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
