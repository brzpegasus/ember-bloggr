exports.config = {
  template:
    handlebars:
      helpers: ["app/templates/handlebars-helpers"]
      ember:
        enabled: true
        path: "ember"
  server:
    defaultServer:
      enabled: true
      onePager: true
    views:
      compileWith: 'handlebars'
      extension: 'hbs'
}
