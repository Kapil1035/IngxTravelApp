sap.ui.define([

    "sap/ui/core/mvc/Controller"
],

    /**

     * @param {typeof sap.ui.core.mvc.Controller} Controller

     */
    function (Controller) {
        "use strict";
        var travelType;
        var travelMode;
        var NumberOfPassenger;
        var tripType;

        return Controller.extend("travelrequest.controller.View2", {

            onInit: function () {
                this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                this.getView().byId("_IDGenButton1").setEnabled(false);

                // if (window.location.hash.endsWith("/page2")) {
                //     // Clear the browser's navigation history by replacing the current state
                //     history.replaceState({}, document.title, window.location.href);
                //   }
                // window.addEventListener("popstate", function (event) {
                //     // Add your condition and navigation logic here
                //     if (window.location.pathname.endsWith("/page2")) {
                //         console.log("Navigating to View1");
                //       var oRouter = sap.ui.core.UIComponent.getRouterFor(this.getView());
                //       oRouter.navTo("RouteView1");
                //     }
                //   }.bind(this));

            },
            onBack : function(){
                this.oRouter.navTo("RouteView1");
            },
            travelType: function () {
                travelType = this.getView().byId("country").getSelectedItem().getText()
                if (travelType) {
                    if (travelMode) {
                        if (NumberOfPassenger) {
                            if (tripType) {
                                this.getView().byId("_IDGenButton1").setEnabled(true);
                            }
                        }
                    }
                }
                console.log(travelType);
            },

            TravelMode: function () {
                travelMode = this.getView().byId("country1").getSelectedItem().getText()
                if (travelType) {
                    if (travelMode) {
                        if (NumberOfPassenger) {
                            if (tripType) {
                                this.getView().byId("_IDGenButton1").setEnabled(true);
                            }
                        }
                    }
                }
                console.log(travelMode);
            },
            NumberOfPassenger: function () {
                NumberOfPassenger = this.getView().byId("country11").getSelectedItem().getText();
                if (travelType) {
                    if (travelMode) {
                        if (NumberOfPassenger) {
                            if (tripType) {
                                this.getView().byId("_IDGenButton1").setEnabled(true);
                            }
                        }
                    }
                }
                console.log(NumberOfPassenger);
            },

            TripType: function () {
                tripType = this.getView().byId("country2").getSelectedItem().getText()
                if (travelType) {
                    if (travelMode) {
                        if (NumberOfPassenger) {
                            if (tripType) {
                                this.getView().byId("_IDGenButton1").setEnabled(true);
                            }
                        }
                    }
                }
                console.log(travelType);
                console.log(tripType);
            },

            onNext: function (oEvent) {

                // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                // var oRouter = UIComponent.getRouter(this);

                this.oRouter.navTo("RouteView3", {
                    "travelType": travelType,
                    "travelMode": travelMode,
                    "NumberOfPassenger": NumberOfPassenger,
                    "tripType": tripType

                });

            }

        });

    });