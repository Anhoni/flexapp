sap.ui.define([ "sap/ui/core/mvc/Controller", "sap/m/MessageToast",
		"sap/ui/core/UIComponent" ], function(Controller, MessageToast,
		UIcomponent) {
	"use strict";
	return Controller.extend("flexapp.controller.Second", {
		onInit : function() {
			MessageToast.show("yay inside second controller");

		},

		onMaterial : function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("material");
		}

	});

});