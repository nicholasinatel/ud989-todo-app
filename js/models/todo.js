/*global Backbone */
// if app exists, dont do anything, if it exists, set it to a new empty object
var app = app || {};

/*
	About this function below:
	IIFE - Immediately Invoked Function Expression
		( open parenthesis = Any variables declared inside this function don't pollute the global scope
			they dont go up the window object, 
			meaning they don't accidentally overwrite any variables that may already exist
	() Immeadiatley Invoked
*/
(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		}
	});
})();// IIFE
