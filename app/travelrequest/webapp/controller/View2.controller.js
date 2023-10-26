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

        var countPassenger = 0;

        var tripChange = 0;

        var salectTravelMode;
        var backcount;
        var nextcount=0;

        return Controller.extend("travelrequest.controller.View2", {



            onInit: function () {



                sap.ui.core.UIComponent.getRouterFor(this).getRoute('RouteView2_1').attachPatternMatched(this._onRouteMatched, this)




                this.getView().byId("_IDGenButton1").setEnabled(false);

            },


            _onRouteMatched: function (oEvent) {
                nextcount=0;
                backcount = oEvent.mParameters.arguments.backcount
                // this.onInit();
                console.log(nextcount);
            console.log("backcount-",backcount);
            },



            AllDetail: function () {
            //   nextcount++;
                if (tripType == "select" || NumberOfPassenger == "select" || travelMode == "select" || travelType == "select") {

                    alert("Please fill the valid value");

                    this.getView().byId("_IDGenButton1").setEnabled(false);

                }

                else if (travelMode == "Car") {
                nextcount++
                    this.getView().byId("state").setVisible(true);

                    this.getView().byId("_IDGenButton1").setEnabled(false);

                    if (salectTravelMode) {

                        if (salectTravelMode == "select") {

                            alert("Please select the valid value")

                        }

                        else {

                            if (travelType && tripType && NumberOfPassenger) {

                                this.getView().byId("_IDGenButton1").setEnabled(true);

                            }

                            else {

                                this.getView().byId("_IDGenButton1").setEnabled(false);

                            }

                        }

                    }

                }
                else if (travelMode != "Car") {
                    
                    this.getView().byId("state").setVisible(false);
                    if (travelType && travelMode && tripType && NumberOfPassenger) {
                        this.getView().byId("_IDGenButton1").setEnabled(true);
                    }
                }

                else {

                    if (travelType && travelMode && tripType && NumberOfPassenger) {

                        this.getView().byId("_IDGenButton1").setEnabled(true);

                    }

                    else {

                        this.getView().byId("_IDGenButton1").setEnabled(false);

                    }

                }

            },



            TravelModeArea: function () {
             nextcount++;
                salectTravelMode = this.getView().byId("state").getSelectedItem().getText();

                this.AllDetail();

                console.log(nextcount,salectTravelMode);

            },



            backToFirst: function () {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                oRouter.navTo("RouteView1")

            },



            travelType: function () {
                nextcount++;
                travelType = this.getView().byId("country").getSelectedItem().getText()

                this.AllDetail()

                console.log(travelType);

            },



            TravelMode: function () {
                 nextcount++
                travelMode = this.getView().byId("country1").getSelectedItem().getText()

                this.AllDetail();

                console.log(travelMode);

            },

            NumberOfPassenger: function () {
                 nextcount++;
                countPassenger++;

                NumberOfPassenger = this.getView().byId("country11").getSelectedItem().getText();

                this.AllDetail()

                console.log(NumberOfPassenger);

            },



            TripType: function () {
                 nextcount++;


                tripType = this.getView().byId("country2").getSelectedItem().getText()

                this.AllDetail();

                console.log(tripType);

                // console.log(tripChange);

            },







            onNext: function (oEvent) {



                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                // var oRouter = UIComponent.getRouter(this);

                if (travelMode == "Car") {

                    oRouter.navTo("RouteView3", {

                        "travelType": travelType,

                        "travelMode": travelMode,

                        "NumberOfPassenger": NumberOfPassenger,

                        "tripType": tripType,

                        "countPassenger": countPassenger,

                        "salectTravelMode": salectTravelMode,

                        "nextcount":nextcount

                    })
                    // location.reload()

                }

                else {

                    oRouter.navTo("RouteView3", {

                        "travelType": travelType,

                        "travelMode": travelMode,

                        "NumberOfPassenger": NumberOfPassenger,

                        "tripType": tripType,

                        "countPassenger": countPassenger,

                        "salectTravelMode": "null",
                        "nextcount":nextcount

                    })

                }

            }



        });



    });