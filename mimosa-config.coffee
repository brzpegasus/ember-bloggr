exports.config =
  minMimosaVersion: '1.0.0'
  modules: ['lint', 'server', 'require', 'minify', 'live-reload', 'bower', 'testem-require']
  template:
    nameTransform: /.*\/templates?\//
    handlebars:
      helpers: ['app/helpers/hbs']
      ember:
        enabled: true
        path: 'ember'
  server:
    defaultServer:
      enabled: true
      onePager: true
    views:
      compileWith: 'handlebars'
      extension: 'hbs'
  require:
    tracking:
      enabled: true
  bower:
    copy:
      mainOverrides: { 'showdown': ['compressed/showdown.js'] }
      strategy: "vendorRoot"
