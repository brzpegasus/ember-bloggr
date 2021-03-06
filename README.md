# Ember Bloggr App

This is an adaptation of Tom Dale's [Building an App with Ember.js](https://www.youtube.com/watch?v=1QHrlFlaXdI) screencast.

All the code shown in the screencast is reorganized into separate `controllers`, `models`, and `routes` directories, and Handlebars templates are moved out of `index.html` and into their own `.hbs` files.

This version also uses [RequireJS](requirejs.org) for module/dependency management, as well as [Mimosa](http://mimosa.io) for all development workflow needs.

## Commands

Install Mimosa:

```bash
$ npm install -g mimosa
```

Build and load the app:

```bash
$ cd ember-bloggr
$ mimosa watch --server
```

Open a browser and navigate to http://localhost:3000.

![Ember Bloggr](http://brzpegasus.github.io/ember-bloggr/img/ember-bloggr.png)
