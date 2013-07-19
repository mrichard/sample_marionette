generator-marionette sample app
======================

Yeoman generator for Express, Marionette and Backbone with AMD


Commands
-------
Install generator-marionette locally
	$ npm install generator-marionette

Start new app
	$ yo marionette

Create a Backbone Model
	$ yo marionette:model person

Create ItemView and hbs template
	$ yo marionette:itemview person --create-all


Details
-------
application.js starts the app by defining a region. It places a person ItemView with person model in the region.