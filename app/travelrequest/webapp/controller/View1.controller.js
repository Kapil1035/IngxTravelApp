sap.ui.define([

    "sap/ui/core/mvc/Controller",

    "sap/ui/model/Filter",

    "sap/ui/model/FilterOperator",

    "sap/ui/core/Fragment",
    "sap/ui/model/FilterType",
    "sap/m/MessageToast",
    "../utils/utilFunc"

],

    /**

     * @param {typeof sap.ui.core.mvc.Controller} Controller

     */

    function (Controller,Filter,FilterOperator,Fragment,FilterType,MessageToast,utilFunc) {

        "use strict";

        var aSelectedTravelIds=[];
        var filter1;
        var filter2;
        var filter3;
        var filter4;
        var startDatePicker; var startSelectedDate; var startFormattedDate; var startDate; var startDay; var startMonth; var startYear;
        var endDatePicker; var endSelectedDate; var endFormattedDate; var endDate; var endDay; var endMonth; var endYear;


        

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
               
              
                
            // if(filter1 || filter2 || filter3 || filter4){
            //     console.log("hhh");
            //     this.getView().byId("button").setEnable("false")
            // }
            // else{
            //     this.getView().byId("button").setEnable("true")
            // }
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


              onSelectionChange1:function(){
                  filter2=this.getView().byId("input2").getSelectedItem().getText();
                  if(filter1 || filter2!="Select" || filter3 || filter4){
                    this.getView().byId("button").setVisible(false)
                  }
                  else if(filter2 =="Select"){
                    this.getView().byId("button").setVisible(true)
                  }
                  else{
                    this.getView().byId("button").setVisible(true)
                  }
               console.log(filter2);
              },

              clearDate:function(){
              this.getView().byId("input1").getSelectedItem().setText("");
              this.getView().byId("input2").getSelectedItem().setText("Select");
              this.getView().byId("input3").setValue("");
              this.getView().byId("input4").setValue("");
              this.getView().byId("button").setVisible(true)

              },

              onSelectionChange2:function(oEvent){
                startDatePicker = oEvent.getSource();
                startSelectedDate = startDatePicker.getDateValue();
                // console.log("Selected Date:", selectedDate);
                startFormattedDate = sap.ui.core.format.DateFormat.getDateInstance().format(startSelectedDate);
                // console.log("Formatted Date:", formattedDate);
                 startDate = new Date(startFormattedDate);
                 startDay = startDate.getDate()
                 startMonth = (startDate.getMonth()) + 1
                 startYear = startDate.getFullYear()
       
                 function addDays(date, days) {
                    const result = new Date(date);
                    result.setDate(date.getDate() + days);
                    return result;
                  }
                  const newDate = addDays(startDate, 90);
    
                //   console.log("dddxdsdsz", filter3.getDate());
                //   console.log("gcgfcgfx ",CURRENT_DATE.getDate());
                  console.log(newDate);

                  var oDatePicker = this.getView().byId("input3");
  var startDate1 = oDatePicker.getDateValue();

  if (startDate1) {
    var endDate1 = new Date(startDate1);
    endDate1.setDate(startDate1.getDate() + 90);

    var oTable = this.getView().byId("table");
    var oBinding = oTable.getBinding("items");
    console.log(oBinding);

    try {
      oBinding.filter([
        new sap.ui.model.Filter("dateOfDeparture", sap.ui.model.FilterOperator.BT, startDate1, endDate1)
      ]);
    } catch (error) {
      console.error("Error while filtering data: " + error);
    }
  }

                console.log(startDay);
                console.log(startMonth);
                console.log(startYear);
              },

              onSelectionChange3:function(oEvent){
                endDatePicker = oEvent.getSource();
                endSelectedDate = endDatePicker.getDateValue();
                // console.log("Selected Date:", selectedDate);
                endFormattedDate = sap.ui.core.format.DateFormat.getDateInstance().format(endSelectedDate);
                 // console.log("Formatted Date:", formattedDate);
                endDate = new Date(endFormattedDate);
                endDay = endDate.getDate()
                endMonth = (endDate.getMonth()) + 1
                endYear = endDate.getFullYear()


                function addDays(date, days) {
                    const result = new Date(date);
                    result.setDate(date.getDate() + days);
                    return result;
                  }
                  
                  const CURRENT_DATE = new Date();
                  const newDate = addDays(endDate, -90);
                  
                  console.log(newDate);

                console.log(endDay);
                console.log(endMonth);
                console.log(endYear);
              },

              onSelectionChange:function(){
              filter1=this.getView().byId("input1").getSelectedItem().getText();
                // filter3=this.getView().byId("input3").getValue();
              
              filter4=this.getView().byId("input4").getValue();

              console.log(filter2);
              if(filter1 || filter2!="Select" || filter3 || filter4){
                this.getView().byId("button").setVisible(false)
              }
              else if(filter2 =="Select"){
                this.getView().byId("button").setVisible(true)
              }
              else{
                this.getView().byId("button").setVisible(true)
              }

            // if (filter1 || filter2 || filter3 || filter4) {
            //     this.getView().byId("button").setVisible(false);
            // } else {
            //     this.getView().byId("button").setVisible(true);
            // }
    
              console.log(filter1,filter2);
              console.log(filter3, filter4);
              },

            onSearch: function(oEvent){
           let combineArr=[]

               var oList = this.getView().byId("table");
                  
                var rejectBtn= this.getView().byId("table")
                if(!rejectBtn.getVisible()) {

                    rejectBtn.setVisible(true);
     
                }

             var oOrigin = this.getView().byId("input1").getSelectedItem()
            if(oOrigin == null ){
                oOrigin = "-"
            }else {
                oOrigin = oOrigin.getText();
            }
            var oOriginSplit=oOrigin.split("-") 
            var oOriginName=oOriginSplit[0]      
            var oOriginId=oOriginSplit[1]    
            
            // console.log(oOriginName);   
            // console.log(oOriginId);
           var oFilter1 = new Filter("empId_Empid", FilterOperator.Contains, oOriginId);            
            
            var oOrigin1 = this.getView().byId("input2").getSelectedItem().getText();   
            console.log(oOrigin1);
            if( oOrigin1 !=='Select'){

              var oFilter2 = new Filter("travelStatus", FilterOperator.Contains, oOrigin1);            
            }
            //  console.log(typeof(oOrigin2));  

            var oOrigin3 = this.getView().byId("input3").getValue(); 
            var startDate = Date.parse(oOrigin3) 

            var oOrigin4 = this.getView().byId("input4").getValue();  
           console.log(oOrigin3);
            let formatedDepDATE = utilFunc.convertDate(oOrigin3)          ;
            let formatedArrDate = utilFunc.convertDate(oOrigin4)
            console.log(formatedDepDATE,formatedArrDate);

            var oFilter3 = new Filter("dateOfDeparture",FilterOperator.GE, formatedDepDATE);                     
            var oFilter4 = new Filter("dateOfArrival",FilterOperator.LE,formatedArrDate); 


            if(oOrigin!="-"){
           combineArr.push(oFilter1)
            }
           if(oOrigin1!="Select"){
            combineArr.push(oFilter2)
           }
           if(formatedDepDATE!="Invalid Date"){
            combineArr.push(oFilter3)
           }
           if(formatedArrDate!="Invalid Date"){
            combineArr.push(oFilter4)
           }
           console.log(combineArr);
           var oCombinedFilter = new Filter({
            filters: combineArr,
            and: true
        });

        oList.getBinding("items").filter(oCombinedFilter,FilterType.Application);
        return
             
            if( formatedDepDATE !== "Invalid Date" && formatedArrDate !=="Invalid Date"){
                console.log("I am inside  and filter");
               var oCombinedFilter = new Filter({
                    filters: [oFilter3, oFilter4],
                    and: true
                });

                oList.getBinding("items").filter(oCombinedFilter,FilterType.Application);
                return
                
            } else if ( formatedDepDATE !=="Invalid Date" && formatedArrDate =="Invalid Date"){
                // oFilter3 = new Filter("dateOfDeparture",FilterOperator.GT, formatedDepDATE);
                console.log("Im in second condition");
                oList.getBinding("items").filter(oFilter3,FilterType.Application);
                return

            }else if ( formatedDepDATE =="Invalid Date" && formatedArrDate !="Invalid Date") {
                // oFilter4 = new Filter("dateOfArrival",FilterOperator.LT, formatedArrDate);
                 console.log("i am in third condition");
                oList.getBinding("items").filter(oFilter4,FilterType.Application);
                return
                  
            }
           
            // console.log( oOrigin, oOrigin1);

            if(oOrigin !== "-" && oOrigin1 !="Select"){
                console.log( oOrigin + "kk");
            
               var oCombinedFilter = new Filter({
                    filters: [oFilter2, oFilter1],
                    and: true
                });

                oList.getBinding("items").filter(oCombinedFilter,FilterType.Application);
                
                
            }else if( oOrigin =="-" && oOrigin1 !=="Select"){
                oList.getBinding("items").filter(oFilter2,FilterType.Application);
                     
            }else {
                oList.getBinding("items").filter(oFilter1,FilterType.Application)
            }



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