sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"covid19/fiori/app/formatter/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("covid19.fiori.app.controller.App", {
			formatter: formatter,
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf covid19.fiori.app.view.App
		 */
			onInit: function() {
				debugger;
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf covid19.fiori.app.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf covid19.fiori.app.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf covid19.fiori.app.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});