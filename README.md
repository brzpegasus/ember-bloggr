# Ember Bloggr App

This is an adaptation of Tom Dale's [Building an App with Ember.js](https://www.youtube.com/watch?feature=player_detailpage&v=Ga99hMi7wfY) screencast.

All the code shown in the screencast is reorganized into separate `controllers`, `models`, and `routes` directories, and Handlebars templates are moved out of `index.html` and into their own `.hbs` files.

This version also uses [RequireJS](requirejs.org) for module/dependency management, and [Mimosa](http://mimosajs.com) for CSS/JS linting, template pre-compiling, livereload, resource optimization, etc.

## Commands

Install Mimosa:

```bash
$ npm install -g mimosa
```

Build and load the app:

```bash
$ cd ember-bloggr
$ npm install
$ mimosa watch --server
```

Open a browser and navigate to http://localhost:3000.

List of other Mimosa commands [http://mimosajs.com/commands.html](http://mimosajs.com/commands.html).

![Ember Bloggr](http://brzpegasus.github.io/ember-bloggr/img/ember-bloggr.png)
