sap.ui.define([ "sap/ui/core/mvc/Controller", "sap/m/MessageToast",
		"sap/ui/core/UIComponent" ], function(Controller, MessageToast,
		UIcomponent) {
	"use strict";
	return Controller.extend("SimpleOTIFlow.controller.First", {
		onInit : function() {
			MessageToast.show("yay inside first controller");
		},

		onPress : function() {
			// declaring variable for conclude global authetification
			var auth;
			// below will give you view for current Controller
			// get user name from screen
			var user = this.getView().byId("userName").getValue();
			// get password from screen
			var pass = this.getView().byId("password").getValue();
			// tell user to fill the details password and user name
			if ((user == "") || (pass == ""))
				MessageToast.show("fill the user name and password");
			else
				$.ajax({
					type : "GET",
					contentType : "application/json",
					url : "data/Logon.json",
					dataType : "json",
					async : false,
					error : function(data, textStatus, jqXHR) {
						console.log("error getting data " + textStatus);
					},
					success : function(data, textStatus, jqXHR) {
						for (var i = 0; i < data.length; i++) {
							if (data[i].User == user)
								if (pass == data[i].Password) {
									MessageToast.show("autheticated go ahead")
									auth = true;
								}
						}
						if (auth != true)
							MessageToast.show("Not Authorized");
					}
				});
			if (auth == true) {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Menu");
			}
		}

	});

});