sap.ui.define([

    "sap/ui/core/mvc/Controller",

    "sap/ui/model/Filter",

    "sap/ui/model/FilterOperator",

    "sap/ui/core/Fragment",
    "sap/ui/model/FilterType",
    "sap/m/MessageToast"

],

    /**

     * @param {typeof sap.ui.core.mvc.Controller} Controller

     */

    function (Controller,Filter,FilterOperator,Fragment,FilterType,MessageToast) {

        "use strict";

        var aSelectedTravelIds=[];

        return Controller.extend("travelrequest.controller.View1", {

            onInit: function () {
       
              
              async function fetchData() {
                var url="http://localhost:4004/odata/v4/travel/readTravel";
                fetch(url)
                .then(res=>console.log(res))
                .then(res=>console.log(res))
                .catch(err=>console.log(err))
            }
            
            fetchData();

               var rejectBtn= this.getView().byId("table")
                if(rejectBtn.getVisible()) {

                    rejectBtn.setVisible(false);
     
                }
            },

            onpage4: function(oEvent){
                var oItem = oEvent.getSource();

                var oRouter = this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteView4", {
                    invoicePath: window.encodeURIComponent(
                        oItem.getBindingContext().getPath().substr(1))
                });

            },





            onPress1: function () {

           

                var oRouter = this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteView2");

            },


            onDeleteLineItem : function () {

                var aItems = this.byId("table").getSelectedItems();
        
         
        
                if (!aItems.length) {
        
                  MessageToast.show("nothing selected");
        
                  return;
        
                }
        
                aItems.forEach(function (oItem) {
        
                  oItem.getBindingContext().delete().catch(function (oError) {
        
                    if (!oError.canceled) {
        
                      // error was already reported to message model
        
                    }
        
                  });
        
                });
        
              },

            onSearch: function(oEvent){
                var rejectBtn= this.getView().byId("table")
                if(!rejectBtn.getVisible()) {

                    rejectBtn.setVisible(true);
     
                }

             var oOrigin = this.getView().byId("input1").getSelectedItem();  
             if(oOrigin==null){
               oOrigin="-"
             }
             else{
              oOrigin=oOrigin.getText();
            }
            var oOriginSplit=oOrigin.split("-") 
            var oOriginName=oOriginSplit[0]      
            var oOriginId=oOriginSplit[1] 
             
             var oOrigin1 = this.getView().byId("input2").getSelectedItem().getText();
             
           
            //  var oOrigin1 = this.getView().byId("input2").getSelectedItem()   
            //  console.log(oOrigin1);
              var oOrigin2 = this.getView().byId("input3").getValue(); 
              var startDate=new Date(oOrigin2)  
              var startDay=startDate.getDate()
              var startMonth=startDate.getMonth()+1
              var startYear=startDate.getFullYear();
              var newStartDate=`${startDay}-${startMonth}-${startYear}`         
            //  console.log(oOriginName);   
            //  console.log(oOriginId);
            //  console.log("hello");
            //  console.log(newStartDate);      
            //  var oOrigin3 = this.getView().byId("input4").getValue();            

            //  var oSearch = oEvent.getParameter("query");
             var oFilter = new Filter("empName_Empid", FilterOperator.Contains, oOriginName);            
             var oFilter1 = new Filter("travelStatus", FilterOperator.Contains, oOrigin1);            
             var oFilter2 = new Filter("dateOfDeparture",FilterOperator.Contains, newStartDate);            
             var oFilter3 = new Filter("",FilterOperator.Contains, oOrigin3);            

             var oList = this.getView().byId("table");

             var aFilter =[oFilter,oFilter1] ;
             var oMaster=new Filter({
             filters:aFilter,
             and:false
             })
             if(oOrigin==null){
              oMaster.and=false
             }

             oList.getBinding("items").filter(oMaster,FilterType.Application);
            //  oList.getBinding("items").filter(oFilter2,FilterType.Application);

 

            },
            selectedTarvelItems : function(oEvent){

              // console.log("hello");

              var oTable = oEvent.getSource();

              var aSelectedItems = oTable.getSelectedItems();

             

              aSelectedTravelIds = aSelectedItems.map(function(oSelectedItem) {

                  return oSelectedItem.getBindingContext().getProperty("travelId")

              });

             console.log(aSelectedTravelIds);

              // console.log("Selected Travel IDs: " + aSelectedTravelIds.join(","));

              return aSelectedTravelIds;

                   

            },

           

            onAcceptPress: function () {
                var oView=this.getView()

               if( aSelectedTravelIds.length ==0) {

                alert("Please select  a Travel Id");

                return

               }

              console.log("Accept press");

              var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

               

              var oTravelUpdate = {

                  "travelId": aSelectedTravelIds[0], // Provide the travelId you want to update

                  "travelStatus": "APD" // Update with the new status you want to set

              }

         

              var JsonData = JSON.stringify(oTravelUpdate);

         

              let EndPoint = "/odata/v4/travel/insertTravel/" + oTravelUpdate.travelId ; // Adjust the endpoint as needed

              // let EndPoint = "/odata/v4/travel/insertTravel"; // Adjust the endpoint as needed

              console.log(EndPoint);

 

              fetch(EndPoint, {

                  method: 'PATCH', // Use PUT for updating existing resource

                  headers: {

                      'Content-Type': 'application/json'

                  },

                  body: JsonData

              })

              .then(function (res) {

                  if (res.ok) {

                      console.log("Travel entity updated successfully");

                      // oRouter.navTo("RouteView1");
                       oView.getModel().refresh();
                    //   location.reload();

                  } else {

                      console.log("Failed to update Travel entity");

                  }

              })

              .catch(function (err) {

                  console.log("Error:", err);

              })

             

            },

            onRejectPress: function () {
                var oView1=this.getView();

                if( aSelectedTravelIds.length ==0) {

                    alert("Please select  a Travel Id");

                    return

                   }

                console.log("Reject press");

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

 

                var oTravelUpdate = {

                    "travelId": aSelectedTravelIds[0], // Provide the travelId you want to update

                    "travelStatus": "RJT" // Update with the new status you want to set

                }

           

                var JsonData = JSON.stringify(oTravelUpdate);

           

                let EndPoint = "/odata/v4/travel/insertTravel/" + oTravelUpdate.travelId ; // Adjust the endpoint as needed

                // let EndPoint = "/odata/v4/travel/insertTravel"; // Adjust the endpoint as needed

                console.log(EndPoint);

 

                fetch(EndPoint, {

                    method: 'PATCH', // Use PUT for updating existing resource

                    headers: {

                        'Content-Type': 'application/json'

                    },

                    body: JsonData

                })

                .then(function (res) {

                    if (res.ok) {

                        console.log("Travel entity  status updated to Reejct successfully");

                        // oRouter.navTo("RouteView1");
                         oView1.getModel().refresh()
                        // location.reload();

                    } else {

                        console.log("Failed to update Travel entity");

                    }

                })

                .catch(function (err) {

                    console.log("Error:", err);

                })

               

              }

           

           

        });

    });