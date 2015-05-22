# CoffeScript + React Demo
This is a sample project showcasing the use of React to create a library of reusable UI components, with the React components written in CJSX. Browserify is used to compile the application into a final bundle, and styles are similarly compiled from component SCSS files.

## Running
Make sure you have `npm` installed already.
```sh
# install the gulp dependencies
$ npm install
# install the project dependencies
$ gulp install
# serve the application & watch for changes
$ gulp
```
The application will now be served on http://localhost:9001, and any changes in the *src* tree will result in a build. Refresh the browser to see the changes.

## Project layout
* **src/**: Source files to be compiled/bundled
  * **pages/**: Root-level React components which mount themselves to the DOM when called by *bootstrap.js*
  * **uilib**: Library of reusable React components and SCSS styles. This library is a dependency of components in *pages/*
  * **bootstrap.js**: The web app's entry point, which decides what page component to initialize
  * **package.json**: Tracks NPM dependencies for the web-app
  * **style.scss**: Can be thought of as the stylesheet's entry point. This stylesheet depends on others, and is compiled into a *style.css* bundle
* **gulpfile.js**: Describes project build and development tasks
* **build/**: Gulp build artifacts go here
* **index.html**: The page to be served and viewed in your browser. It relies on the gulpfile's build artifacts
* **package.json**: Tracks development dependencies like gulp and gulp-browserify