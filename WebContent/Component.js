sap.ui
		.define(
				[ "sap/ui/core/UIComponent", 
				  "sap/ui/model/json/JSONModel",
				  "sap/f/library",
				  "sap/f/FlexibleColumnLayoutSemanticHelper" ],
				function(UIComponent, JSONModel, library,
						FlexibleColumnLayoutSemanticHelper) {
					"use strict";
					var LayoutType = library.LayoutType;
					return UIComponent
							.extend(
									"flexapp.Component",
									{

										metadata : {
											manifest : "json",
												   },
										init : function() {
											console.log("intoComponent");
											// call the init function of the parent
											UIComponent.prototype.init.apply(this, arguments);
											// set data model from no reason at all JSONfile
											var oModel = new sap.ui.model.json.JSONModel();
											this.setModel(oModel);
											// set products demo model on this
											// sample
											var oProductsModel = new sap.ui.model.json.JSONModel();
											$.ajax({
														type : "GET",
														contentType : "application/json",
														url : "data/products.json",
														dataType : "json",
														async : false,
														error : function(data,
																textStatus,
																jqXHR) {
															console.log("error getting data "
																			+ textStatus);
														},
														success : function(
																data,
																textStatus,
																jqXHR) {
															oProductsModel = new JSONModel(data);
															oProductsModel.setSizeLimit(1000);

														}
													});
											this.setModel(oProductsModel,"products");
											this.getRouter().initialize();
										},
										/**
										 * Returns an instance of the semantic
										 * helper
										 * 
										 * @returns {sap.f.FlexibleColumnLayoutSemanticHelper}
										 *          An instance of the semantic
										 *          helper
										 */
										getHelper : function() {
											var oFCL = this.getRootControl().byId("fcl"), 
											//oParams = UriParameters.fromQuery(location.search), 
											oSettings = {
												defaultTwoColumnLayoutType : LayoutType.TwoColumnsMidExpanded,
												defaultThreeColumnLayoutType : LayoutType.ThreeColumnsMidExpanded,
												mode : "null",
												maxColumnCount : "null"
												//mode : oParams.get("mode"),
												//maxColumnsCount : oParams.get("max")
											};
											return FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL,oSettings);
										}
									});

				});