sap.ui.define(
  [
    "sap/ui/core/mvc/Controller"
  ],
  function (BaseController) {
    "use strict";

    return BaseController.extend("travelrequest.controller.View4", {
      onInit() {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.getRoute("RouteView4").attachPatternMatched(this._onObjectMatched, this);
      },
      _onObjectMatched: function (oEvent) {
        var sPath = window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath)
        this.getView().bindElement({
          path: "/" + sPath
        });
        console.log("my path : " + sPath);
        var oView = this.getView();
        var oList = oView.byId("passengerList"); // Adjust the ID as per your XML view
        // var passengerNames = this.getView().getModel().getProperty("/" + sPath + "/passengerName");
        // console.log(passengerNames);
        // var oBindingContext = this.getView().getBindingContext();
        // console.log(oBindingContext);
    
        // if (oBindingContext) {
        //     var passengerNames = oBindingContext.getProperty("passengerName");
        //     console.log(passengerNames);
    
        //     if (Array.isArray(passengerNames)) {
        //         var listItems = passengerNames.map(function (name) {
        //             return new sap.m.StandardListItem({
        //                 title: name
        //             });
        //         });
    
        //         oList.removeAllItems();
        //         oList.addAggregation("items", listItems);
        //     }
        // }
        //?$expand=passengerName
        oList.bindAggregation("items", {
            path:  "inpassengerName", // Adjust the path to the passengerName array
            template: new sap.m.StandardListItem({
                title:"{.}", // Assuming passengerName is a simple string array
                

            })
        });
      }

    });
  }
);
