(function() {
	'use strict';

	var root = this;

	root.define([
		'backbone',
		'communicator',
		'views/item/person',
		'models/person'
	],

	function( Backbone, Communicator, PersonView, Person ) {

		var App = new Backbone.Marionette.Application();

		/* Add application regions here */
		App.addRegions({
			mainRegion: "#main"
		});

		/* Add initializers here */
		App.addInitializer( function () {
			App.mainRegion.show( new PersonView({ model: new Person }) );

			Communicator.mediator.trigger("APP:START");
		});

		return App;
	});
}).call( this );