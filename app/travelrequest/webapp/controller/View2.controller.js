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
        var countPassenger=0;
        return Controller.extend("travelrequest.controller.View2", {

            onInit: function () {



                this.getView().byId("_IDGenButton1").setEnabled(false);


            },

            AllDetail:function(){
                if(tripType=="select" || NumberOfPassenger=="select" || travelMode=="select" || travelType=="select"){
                 alert("Please fill the valid value");
                 this.getView().byId("_IDGenButton1").setEnabled(false);
                }
                // else if(NumberOfPassenger=="select"){
                //     alert("Please fill the valid value in NumberOfPassenger")
                //     this.getView().byId("_IDGenButton1").setEnabled(false);

                // }
                // else if(travelMode=="select"){
                //     alert("Please fill the valid value in TravelMode");
                //     this.getView().byId("_IDGenButton1").setEnabled(false);
                // }
                // else if(travelType=="select"){
                //     alert("Please fill the valid value in TravelType");
                //     this.getView().byId("_IDGenButton1").setEnabled(false);
                // }
                else{
                if (travelType && travelMode && tripType &&  NumberOfPassenger ) {
                  
                                this.getView().byId("_IDGenButton1").setEnabled(true);

                }
            }
            },

            backToFirst:function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteView1")
            },

            travelType: function () {
                travelType = this.getView().byId("country").getSelectedItem().getText()
               this.AllDetail()
                console.log(travelType);
            },

            TravelMode: function () {
                travelMode = this.getView().byId("country1").getSelectedItem().getText()
                this.AllDetail();
                console.log(travelMode);
            },
            NumberOfPassenger: function () {
                countPassenger++;
                NumberOfPassenger = this.getView().byId("country11").getSelectedItem().getText();
                this.AllDetail()
                console.log(NumberOfPassenger);
            },

            TripType: function () {
                tripType = this.getView().byId("country2").getSelectedItem().getText()
                this.AllDetail();
                console.log(tripType);
            },



            onNext: function (oEvent) {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                // var oRouter = UIComponent.getRouter(this);

                oRouter.navTo("RouteView3", {
                    "travelType": travelType,
                    "travelMode": travelMode,
                    "NumberOfPassenger": NumberOfPassenger,
                    "tripType": tripType,
                    "countPassenger":countPassenger

                });

            }

        });

    });