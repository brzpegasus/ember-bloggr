# Ember Bloggr App with Grunt

This application structure and configuration closely mirrors the skeleton provided by [Yeoman's Ember Generator](https://github.com/yeoman/generator-ember).

 - Uses [Grunt](http://gruntjs.com/) to manage all development and build tasks
 - Uses [Bower](http://bower.io/) to manage third-party dependencies

## Install

To install Grunt's CLI and Bower globally:

```bash
$ npm install -g grunt-cli
$ npm install -g bower
```

To install the app dependencies:

```bash
$ cd ember-bloggr/grunt
$ npm install
$ bower install
```

## Grunt Tasks

 - `grunt build`: Compiles, optimizes, and copies all assets into a `dist` directory.
 - `grunt server:dist`: Similar to `build` but also fires up a static web server on `localhost:9000`.
 - `grunt server`: Compiles assets and fires up a static web server on `localhost:9000`. Minification/concatenation is skipped and files are _not_ copied to a `dist` directory.
