sap.ui.define([
	"sap/ui/core/UIComponent"
	],
	function(UIComponent){
		return UIComponent.extend("covid19.fiori.app.Component", {
			metadata: {
				manifest: "json"
			},
			init: function(){
				sap.ui.core.UIComponent.prototype.init.apply(this);
				debugger;
				// var oRouter = this.getRouter();
				// oRouter.initialize();
				
			}
		});
	});