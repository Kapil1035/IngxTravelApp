sap.ui.define([

    "sap/ui/core/mvc/Controller",
    // "sap/ui/core/mvc/Controller/View3",
    "sap/m/MessageToast",

    "sap/ui/core/Fragment",

    "sap/ui/model/Filter",

    "sap/ui/model/FilterOperator",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"

],

    /**

     * @param {typeof sap.ui.core.mvc.Controller} Controller

     */

    function (Controller, MessageToast, Fragment, Filter, FilterOperator, UIComponent, JSONModel) {

        "use strict";

        // var oModel = new JSONModel({
        //     items: [
        //        { name: "Item 1", description: "Description 1" },
        //        { name: "Item 2", description: "Description 2" },
        //        { name: "Item 3", description: "Description 3" }
        //     ]
        //  });

        //  // Set the model to the view
        //  this.getView().byId("listId").setModel(oModel);



        var travelType; var travelMode; var NumberOfPassenger; var tripType;
        var retDate; var retMonth; var retYear;
        var arrDate; var arrMonth; var arrYear;
        var depDate; var depMonth; var depYear;
        var PassengerNameArr = [];
        var field;
        var id = 0;
        var PassengerName1; var PassengerName2; var PassengerName3; var PassengerName4; var PassengerName5;
        var PassengerName1split; var PassengerName2split; var PassengerName3split; var PassengerName4split; var PassengerName5split;
        var PassengerName1ID; var PassengerName2ID; var PassengerName3ID; var PassengerName4ID; var PassengerName5ID;
        var PassengerName1Name; var PassengerName2Name; var PassengerName3Name; var PassengerName4Name; var PassengerName5Name;
        var origin; var destination;
        var billable_value;
        var BillableCustomer;
        var DepoDatePicker; var DepselectedDate; var DepformattedDate; var Depdate;
        var ArroDatePicker; var ArrselectedDate; var ArrformattedDate; var Arrdate;
        var RetoDatePicker; var RetselectedDate; var RetformattedDate; var Retdate;
        var NumberOfmonth; var NumberOfdays;
        var hotelAccVal;
        var travelId;
        var travelIdCount = 0;
        var countPassenger;
        var tripChange;
        var PassengerNameData;
        var hotelAccomodation;
        var salectTravelMode;
        var backcount=0;
        var arrMatch=[];
        var objMatch={};
        var nextcount;

        // var data=oEvent.mParameters.arguments;

        //   var tripType=data.tripType;

        //   var NumberOfPassenger=data.NumberOfPassenger;

        //   var travelMode=data.travelMode;

        //   var travelType=data.travelType;


        return Controller.extend("travelrequest.controller.View3", {

            onInit: function (oEvent) {
                // var rejectBtn = this.getView().byId("_IDGenMultiInput1");
                //     var rejectBtn = this.getView().byId("_IDGenMultiInput1").setEnabled(false);
                //     if(rejectBtn.getVisible()) {
                //        rejectBtn.setVisible(false);
                //    }
                //    abc.setEnabled(false);
                // location.reload();
                // console.log("I am in onInit");
                // console.log(tripChange);
            
                // this.getView().getModel().refresh();

               

                // console.log(salectTravelMode);
                // console.log({Employee});
                //    var abbb=this.getView().byId("NameOfPassenger")
                //    debugger;
                // console.log(abbb);


                sap.ui.core.UIComponent.getRouterFor(this).getRoute('RouteView3').attachPatternMatched(this._onRouteMatched, this)
            },


            Cancel: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteView1")
                location.reload()
            },

            enableSubmitButton:function(){
                // console.log("hello");
                if(tripType=="Round_Trip"){
                
                if(PassengerNameArr.length>=1 && origin && destination && billable_value && Depdate && Arrdate && Retdate){
                    if(PassengerName1=="---select-" || PassengerName2=="---select-" || PassengerName3=="---select-" || PassengerName4=="---select-" || PassengerName5=="---select-" || billable_value=="select" || origin=="" || destination==""){
                        alert("Please fill the valid value")
                        this.getView().byId("_IDGenButton1").setEnabled(false)
                    }
                    else if(billable_value=="Yes"){
                        if(PassengerNameArr.length>=1 && origin && destination && BillableCustomer && Depdate && Arrdate && Retdate){
                        if(BillableCustomer=="select"){
                            alert("Please fill the valid value")
                            this.getView().byId("_IDGenButton1").setEnabled(false)
                        }
                        else{
                            this.getView().byId("_IDGenButton1").setEnabled(true)

                        }
                     }
                     else{
                        this.getView().byId("_IDGenButton1").setEnabled(false)
                     }
                        }
                        else if(billable_value=="No"){
                            if(PassengerNameArr.length>=1 && origin && destination  && Depdate && Arrdate){
                            if(PassengerName1=="---select-" || PassengerName2=="---select-" || PassengerName3=="---select-" || PassengerName4=="---select-" || PassengerName5=="---select-" || origin=="" || destination==""){
                                alert("Please fill the valid value")
                                this.getView().byId("_IDGenButton1").setEnabled(false)
        
                            }
                            else{
                                this.getView().byId("_IDGenButton1").setEnabled(true)

                            }
                            
                                      }
                                      else{
                                this.getView().byId("_IDGenButton1").setEnabled(false)
                                      }
                           }
                }       
                        }
            else if(tripType=="One_way"){
                // console.log("origin-",origin);
                // if(PassengerNameArr.length>=1 && origin && destination && billable_value){
                    if(PassengerName1=="---select-" || PassengerName2=="---select-" || PassengerName3=="---select-" || PassengerName4=="---select-" || PassengerName5=="---select-" || billable_value=="select" || origin=="" || destination=="" || Depdate==""){
                        alert("Please fill the valid value")
                        this.getView().byId("_IDGenButton1").setEnabled(false)
                    }
                    else if(billable_value=="Yes"){
                        if(PassengerNameArr.length>=1 && origin && destination && BillableCustomer && Depdate && Arrdate){
                        if(BillableCustomer=="select"){
                            alert("Please fill the valid value")
                            this.getView().byId("_IDGenButton1").setEnabled(false)
                        }
                        else{
                            this.getView().byId("_IDGenButton1").setEnabled(true)

                        }
                     }
                     else{
                        this.getView().byId("_IDGenButton1").setEnabled(false)
                     }
                        }
                        else if(billable_value=="No"){
                            if(PassengerNameArr.length>=1 && origin && destination  && Depdate && Arrdate){
                            if(PassengerName1=="---select-" || PassengerName2=="---select-" || PassengerName3=="---select-" || PassengerName4=="---select-" || PassengerName5=="---select-" || origin=="" || destination=="" || Depdate==""){
                                alert("Please fill the valid value")
                                this.getView().byId("_IDGenButton1").setEnabled(false)
        
                            }
                            else{
                                this.getView().byId("_IDGenButton1").setEnabled(true)

                            }
                            
                                      }
                                      else{
                                this.getView().byId("_IDGenButton1").setEnabled(false)
                                      }
                           }
                }       
                
                // }
            },

            nameofPassenger: function() {
                PassengerName1 = this.getView().byId("NameOfPassenger00").getSelectedItem().getText()
                PassengerName1split = PassengerName1.split("-"); 
                PassengerName1ID=PassengerName1split[0];
                PassengerName1Name=PassengerName1split[1];               
                console.log(PassengerName1ID);
                console.log(PassengerName1Name);
                if(PassengerName1ID==PassengerName2ID || PassengerName1ID==PassengerName3ID || PassengerName1ID==PassengerName4ID || PassengerName1ID==PassengerName5ID){
                    alert("Please fill Different name of Different ID");
                    this.getView().byId("NameOfPassenger00").setSelectedKey("---select-")
                    return
                }
                PassengerNameArr.push(PassengerName1Name)
                // console.log(PassengerNameArr.length);
                this.enableSubmitButton()
            },
            nameofPassenger1: function () {
                PassengerName2 = this.getView().byId("NameOfPassenger01").getSelectedItem().getText()
                PassengerName2split = PassengerName2.split("-"); 
                PassengerName2ID=PassengerName2split[0];
                PassengerName2Name=PassengerName2split[1];               
                console.log(PassengerName2ID);
                console.log(PassengerName2Name);
                if(PassengerName2ID==PassengerName1ID || PassengerName2ID==PassengerName3ID || PassengerName2ID==PassengerName4ID || PassengerName2ID==PassengerName5ID){
                    alert("Please fill Different name of Different ID");
                    this.getView().byId("NameOfPassenger01").setSelectedKey("---select-")
                    return
                }
                PassengerNameArr.push(PassengerName2Name)
                // console.log(PassengerNameArr);
                this.enableSubmitButton()

            },
            nameofPassenger2: function () {
                PassengerName3 = this.getView().byId("NameOfPassenger02").getSelectedItem().getText()
               PassengerName3split=PassengerName3.split("-");
               PassengerName3ID=PassengerName3split[0];
               PassengerName3Name=PassengerName3split[1];
               console.log(PassengerName3ID);
               console.log(PassengerName3Name);
               if(PassengerName3ID==PassengerName1ID || PassengerName3ID==PassengerName2ID || PassengerName3ID==PassengerName4ID || PassengerName3ID==PassengerName5ID){
                alert("Please fill Different name of Different ID");
                this.getView().byId("NameOfPassenger02").setSelectedKey("---select-")
                return
            }
                PassengerNameArr.push(PassengerName3Name)
                this.enableSubmitButton()
            },
            nameofPassenger3: function () {
                PassengerName4 = this.getView().byId("NameOfPassenger03").getSelectedItem().getText()
                PassengerName4split=PassengerName4.split("-");
                PassengerName4ID=PassengerName4split[0];
                PassengerName4Name=PassengerName4split[1];
                console.log(PassengerName4ID);
                console.log(PassengerName4Name);
                if(PassengerName4ID==PassengerName2ID || PassengerName4ID==PassengerName1ID || PassengerName4ID==PassengerName3ID || PassengerName4ID==PassengerName5ID){
                    alert("Please fill Different name of Different ID");
                    this.getView().byId("NameOfPassenger03").setSelectedKey("---select-")
                    return
                }
                PassengerNameArr.push(PassengerName4Name)
                this.enableSubmitButton()
            },
            nameofPassenger4: function () {
                var PassengerName5 = this.getView().byId("NameOfPassenger04").getSelectedItem().getText()
                PassengerName5split=PassengerName5.split("-");
                PassengerName5ID=PassengerName5split[0];
                PassengerName5Name=PassengerName5split[1];
                console.log(PassengerName5ID);
                console.log(PassengerName5Name);
                if(PassengerName5ID==PassengerName1ID || PassengerName5ID==PassengerName3ID || PassengerName2ID==PassengerName4ID || PassengerName5ID==PassengerName2ID){
                    alert("Please fill Different name of Different ID");
                    this.getView().byId("NameOfPassenger04").setSelectedKey("---select-")
                    return
                }
                PassengerNameArr.push(PassengerName5Name)
                this.enableSubmitButton()
            },
            backButton: function () {
                backcount++;
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteView2_1",{
                    "backcount":backcount
                });
                id =0;
                
            },


            _onRouteMatched: function (oEvent) {
               this.onInit()
               backcount=0;
                this.getView().byId("_IDGenSimpleForm2");

                travelType = oEvent.mParameters.arguments.travelType;
                travelMode = oEvent.mParameters.arguments.travelMode;
                NumberOfPassenger = oEvent.mParameters.arguments.NumberOfPassenger;
                tripType = oEvent.mParameters.arguments.tripType;
                countPassenger = oEvent.mParameters.arguments.countPassenger;
                salectTravelMode=oEvent.mParameters.arguments.salectTravelMode
                nextcount=oEvent.mParameters.arguments.nextcount;


                console.log("nextcount:",nextcount);
                if(nextcount>0){
                    // PassengerName1ID=null;
                    // PassengerName1Name=null;
                    // PassengerName2ID=null;
                    // PassengerName2Name=null;
                    // PassengerName3ID=null;
                    // PassengerName3Name=null;
                    // PassengerName4ID=null;
                    // PassengerName4Name=null;
                    // PassengerName5ID=null;
                    // PassengerName5Name=null;
                    // origin=null;
                    // destination=null;
                    // Depdate=null;
                    // Arrdate=null;
                    // Retdate=null;
                    // NumberOfdays=null;
                    // NumberOfPassenger=null;
                    // PassengerNameData=null;
                //  if(PassengerName1 || PassengerName2 || PassengerName3 || PassengerName4 || PassengerName5 || origin || destination || Depdate || Arrdate || Retdate || NumberOfdays || NumberOfPassenger || BillableCustomer || PassengerNameData){
                //     PassengerName1=""; PassengerName2=""; PassengerName3=""; PassengerName4=""; PassengerName5=""; origin=""; destination=""; Depdate=""; Arrdate=""; Retdate=""; NumberOfdays=""; NumberOfPassenger=""; BillableCustomer=""; PassengerNameData="";
                // }

                    this.getView().byId("_IDGenButton1").setEnabled(false)
                    this.getView().byId("city").setSelectedKey("")
                    this.getView().byId("city2").setSelectedKey("")
                    this.getView().byId("billable_value").setSelectedKey("select")
                    this.getView().byId("BillableCustomer").setSelectedKey("")
                    this.getView().byId("BillableCustomer").setEnabled(false)
                    this.getView().byId("datePicker").setValue("")
                    this.getView().byId("datePicker1").setValue("")
                    this.getView().byId("datePicker2").setValue("")
                    this.getView().byId("_IDGenInput1").setValue("")
                    this.getView().byId("_IDGenInput1").setEnabled(false)
                    this.getView().byId("_IDGenSwitch1").setState(false)
                }
                // console.log(salectTravelMode);
                if (tripType == "One_way") {
                    // console.log("gggggggg");
                    this.getView().byId("datePicker2").setEnabled(false)
                    this.getView().byId("_IDGenSwitch1").setEnabled(false)
                }
                else{
                    this.getView().byId("datePicker2").setEnabled(true)
                    this.getView().byId("_IDGenSwitch1").setEnabled(true)
                    // hotelAccomodation=this.getView().byId("_IDGenSwitch1").getText()
                    
                }
                if(countPassenger++){
                for (let index = 0; index < 5; index++) {
                    let selectfield = this.getView().byId(`NameOfPassenger0${id}`)
                    if(index<NumberOfPassenger){
                        if(nextcount>0){
                            selectfield.setSelectedKey("---select-")
                        }
                        selectfield.setVisible(true);
                    }
                    else{
                        if(selectfield.setVisible(true)){
                            // selectfield.setValue("---select-")
                            selectfield.setVisible(false)
                        }
                    }
                    id = id + 1;
                  
            }
        }
           


             if(salectTravelMode=="intercity"){
                    this.getView().byId("city2").setVisible(false)           
                }

              else if(salectTravelMode!="intercity") {
                this.getView().byId("city2").setVisible(true)           
              } 


            },

            origin:function(){
                origin = this.getView().byId("city").getSelectedItem().getText();
                
                if(origin==""){
                    alert("Please select valid origin")
                    this.getView().byId("_IDGenButton1").setEnabled(false)
                    return
                }
                if (origin == destination) {
                    alert("Origin or Destination can't be same")
                    this.getView().byId("city2").setSelectedKey("")
                    this.getView().byId("_IDGenButton1").setEnabled(false)
                }

                if(salectTravelMode=="intercity"){
                    destination=origin           
                }
              
                // this.destination()
                this.enableSubmitButton()
                // console.log(origin.length);
            },

            destination: function () {
                // console.log(oEvent);
                if(origin){
                         this.getView().byId("city2").setEnabled(true)
                        destination = this.getView().byId("city2").getSelectedItem().getText()
                        if(destination==""){
                            alert("Please select valid destination")
                            this.getView().byId("_IDGenButton1").setEnabled(false)
                            return
                    }
                }
                else{
                    alert("Please fill origin first");
                    this.getView().byId("city2").setSelectedKey("")
                }
                // console.log(destination.length);
                 if(salectTravelMode!="intercity"){
                     if (origin == destination) {
                         alert("Origin or Destination can't be same")
                         this.getView().byId("city2").setSelectedKey("")
                         this.getView().byId("_IDGenButton1").setEnabled(false)
                     }
                 }
                this.enableSubmitButton()
            },


            handleChange01: function (oEvent) {
                var DepLatestdate=new Date();
                var DepLatestDay=DepLatestdate.getDate();
                var DepLatestMonth=DepLatestdate.getMonth()+1;
                var DepLatestYear=DepLatestdate.getFullYear();
                // console.log(DepLatestDay, DepLatestMonth, DepLatestYear);
                DepoDatePicker = oEvent.getSource();
                DepselectedDate = DepoDatePicker.getDateValue();
                // console.log("Selected Date:", selectedDate);
                DepformattedDate = sap.ui.core.format.DateFormat.getDateInstance().format(DepselectedDate);
                // console.log("Formatted Date:", formattedDate);
                Depdate = new Date(DepformattedDate);
                depDate = Depdate.getDate()
                depMonth = (Depdate.getMonth()) + 1
                depYear = Depdate.getFullYear()

                console.log(depDate);
                console.log(depMonth);
                console.log(depYear);
                if(depDate<DepLatestDay || depMonth<DepLatestMonth || depYear<DepLatestYear){
                    alert("Please fill the valid date");
                    DepoDatePicker.setValue("")
                    this.getView().byId("_IDGenInput1").setValue("")
                    this.getView().byId("_IDGenSwitch1").setState(false)
                    this.getView().byId("_IDGenButton1").setEnabled(false)
                    return
                }
                if (depMonth === arrMonth) {
                    if (depDate > arrDate) {
                        alert("Arrival Date not valid")
                        this.getView().byId("datePicker1").setValue("")
                        this.getView().byId("_IDGenInput1").setValue("")
                        this.getView().byId("_IDGenSwitch1").setState(false)
                        this.getView().byId("_IDGenButton1").setEnabled(false)
                    }
                }
                else if (depMonth < arrMonth) {
                    if (depDate > arrDate) {
                        alert("Arrival Date not valid")
                        this.getView().byId("_IDGenButton1").setEnabled(false)
                    }
                }
                else if (depMonth > arrMonth) {
                    if (depDate > arrDate) {
                        alert("Arrival Date not valid")
                        this.getView().byId("_IDGenButton1").setEnabled(false)
                    }
                }
                this.enableSubmitButton();
            },

           

            handleChange: function (oEvent) {
                // console.log(travelMode);
             if(Depdate){
                var ArrLatestdate=new Date();
                var ArrLatestDay=ArrLatestdate.getDate();
                var ArrLatestMonth=ArrLatestdate.getMonth()+1;
                var ArrLatestYear=ArrLatestdate.getFullYear();
                ArroDatePicker = oEvent.getSource();
                ArrselectedDate = ArroDatePicker.getDateValue();
                // console.log("Selected Date:", selectedDate);
                ArrformattedDate = sap.ui.core.format.DateFormat.getDateInstance().format(ArrselectedDate);
                // console.log("Formatted Date:", formattedDate);
                Arrdate = new Date(ArrformattedDate);
                arrDate = Arrdate.getDate()
                arrMonth = (Arrdate.getMonth()) + 1
                arrYear = Arrdate.getFullYear()

                if( arrMonth<ArrLatestMonth || arrYear<ArrLatestYear){
                    alert("Please fill the valid date");
                    ArroDatePicker.setValue("")
                    this.getView().byId("_IDGenInput1").setValue("")
                    this.getView().byId("_IDGenSwitch1").setState(false)
                    this.getView().byId("_IDGenButton1").setEnabled(false)
                    return
                }

                if (depMonth == arrMonth || arrMonth==retMonth) {
                    if (depDate > arrDate || arrDate >retDate ||arrDate<ArrLatestDay) {
                        alert("Arrival Date not valid")
                        this.getView().byId("datePicker1").setValue("")
                        this.getView().byId("_IDGenInput1").setValue("")
                        this.getView().byId("_IDGenSwitch1").setState(false)
                        this.getView().byId("_IDGenButton1").setEnabled(false)
                    }
                else{
                  if(travelMode=="Flight"){
                    if(arrDate>depDate){
                        alert("Arrival date not be more than 1 day");
                        ArroDatePicker.setValue("")
                    }
                  }
                  else if(travelMode=="Train"){
                    if(arrDate>(depDate+3)){
                        alert("Arrival date not be more than 3 days of departure date")
                        ArroDatePicker.setValue("")
                    }
                  }
                   else if(travelMode=="Car"){
                    if(salectTravelMode=="intercity"){
                        if(arrDate>depDate){
                            alert("Arrival date not be more than 1 days of departure date")
                            ArroDatePicker.setValue("")
                        }
                    }
                    else{
                        if(arrDate>(depDate+1)){
                            alert("Arrival date not be more than 2 days of departure date")
                            ArroDatePicker.setValue("")
                        }
                    }
                   }   
                    }
                }
                else if (depMonth < arrMonth || arrMonth < retMonth) {  
                  if(depMonth==1 || depMonth==3 || depMonth==5 || depMonth==7 || depMonth==8 || depMonth==10 || depMonth==12){
                   if(travelMode=="Train"){
                  if(arrDate>(depDate-28)){
                   alert("Arrival date not be more than 3 days of departure date")
                   ArroDatePicker.setValue("")
                     }
                   } 
                   else if(salectTravelMode=="interstate"){
                    if(arrDate>(depDate-30)){
                        alert("Arrival date not be more than 1 days of departure date")
                        ArroDatePicker.setValue("")
                    }
                   }
                   else{
                    if(arrDate!=depDate){
                        alert("Arrival date not valid")
                        ArroDatePicker.setValue("")
                    }
                   }
                 
                  }

                }
                else if (depMonth > arrMonth || arrMonth >retMonth) {
                        alert("Arrival Date not valid")
                        this.getView().byId("datePicker1").setValue("")
                        this.getView().byId("_IDGenInput1").setValue()
                        this.getView().byId("_IDGenSwitch1").setState(false)
                        this.getView().byId("_IDGenButton1").setEnabled(false)
                }
                this.enableSubmitButton();
            }
            else{
                alert("Please fill Date of Departure first");
                this.getView().byId("datePicker1").setValue("")

            }
            NumberOfdays = (retDate - arrDate) + NumberOfmonth
            this.getView().byId("_IDGenInput1").setValue(NumberOfdays)
                console.log(arrDate);
                console.log(arrMonth);
                console.log(arrYear);
            },

            handleChange1: function (oEvent) {
                if(Arrdate){
                RetoDatePicker = oEvent.getSource();
                RetselectedDate = RetoDatePicker.getDateValue();
                // console.log("Selected Date:", selectedDate);
                RetformattedDate = sap.ui.core.format.DateFormat.getDateInstance().format(RetselectedDate);
                // console.log("Formatted Date:", formattedDate);
                Retdate = new Date(RetformattedDate);
                retDate = Retdate.getDate()
                retMonth = (Retdate.getMonth()) + 1
                retYear = Retdate.getFullYear()
                if (retMonth == 1 || retMonth == 3 || retMonth == 5 || retMonth == 7 || retMonth == 8 || retMonth == 10 || retMonth == 12) {

                    NumberOfmonth = (retMonth - arrMonth) * 31
                }
                else if (retMonth == 4 || retMonth == 6 || retMonth == 9 || retMonth == 11) {
                    NumberOfmonth = (retMonth - arrMonth) * 30
                }
                else if (retMonth == 2) {
                    NumberOfmonth = (retMonth - arrMonth) * 28
                }
                NumberOfdays = (retDate - arrDate) + NumberOfmonth
                if (NumberOfdays < 0) {
                    alert("Return date can't be backDate")
                    this.getView().byId("datePicker2").setValue("");
                    this.getView().byId("_IDGenSwitch1").setState(false)
                    this.getView().byId("_IDGenInput1").setValue("")
                    console.log("I am here -- ");
                    this.getView().byId("_IDGenButton1").setEnabled(false)
                }
                else if (NumberOfdays == 0) {
                    this.getView().byId("_IDGenInput1").setValue(NumberOfdays)
                    this.getView().byId("_IDGenSwitch1").setState(false)
                    hotelAccVal = "No"
                    console.log(hotelAccVal);
                }
                else if (NumberOfdays >= 1) {
                    this.getView().byId("_IDGenInput1").setValue(NumberOfdays)
                    this.getView().byId("_IDGenSwitch1").setState(true)
                    hotelAccVal = "Yes"
                    console.log(hotelAccVal);
                }

                
            }
            else{
                alert("Please fill the arrival date first");
                this.getView().byId("datePicker2").setValue("")
                this.getView().byId("_IDGenButton1").setEnabled(false)

            }
                this.enableSubmitButton();

                console.log(retDate);
                console.log(retMonth);
                console.log(retYear);
                console.log(NumberOfdays);

            },

            billable: function () {
                billable_value = this.getView().byId("billable_value").getSelectedItem().getText();
                console.log(billable_value);
                if (billable_value == "Yes") {
                    this.getView().byId("BillableCustomer").setEnabled(true)
                }
                else {
                    BillableCustomer=""
                    this.getView().byId("BillableCustomer").setSelectedKey("")
                    this.getView().byId("BillableCustomer").setEnabled(false)


                }
                this.enableSubmitButton();

            },

            BillableCustomer: function () {
                BillableCustomer = this.getView().byId("BillableCustomer").getSelectedItem().getText();
                this.enableSubmitButton();

                console.log(BillableCustomer);
            },

            onValueHelpClose: function (oEvent) {

                var oSelectedItem = oEvent.getParameter("selectedItem");

                oEvent.getSource().getBinding("items").filter([]);

                if (!oSelectedItem) {



                    return;

                }



                this.byId("singleCondition").setValue(oSelectedItem.getTitle());

            },

            onValueHelpSearch: function (oEvent) {

                var sValue = oEvent.getParameter("value");

                var oFilter = new Filter("passengerName", FilterOperator.Contains, sValue);

                oEvent.getSource().getBinding("items").filter([oFilter]);

            },

            onOpenDialog: function () {



                // create dialog lazily

                if (!this.pDialog) {

                    this.pDialog = this.loadFragment({

                        name: "travelrequest.view.dialog"



                    });

                }

                this.pDialog.then(function (oDialog) {

                    oDialog.open();

                });

            },

            onSubmit: function () {
                var oView=this.getView()
               if(NumberOfPassenger==1){
                PassengerNameData=`${PassengerName1Name}`
               }
               else if(NumberOfPassenger==2){
                PassengerNameData=`${PassengerName1Name}, ${PassengerName2Name}`
               }
               else if(NumberOfPassenger==3){
                PassengerNameData=`${PassengerName1Name}, ${PassengerName2Name}, ${PassengerName3Name}`
               }
               else if(NumberOfPassenger==4){
                PassengerNameData=`${PassengerName1Name}, ${PassengerName2Name}, ${PassengerName3Name}, ${PassengerName4Name}`

               }
               else if(NumberOfPassenger==5){
                PassengerNameData=`${PassengerName1Name}, ${PassengerName2Name}, ${PassengerName3Name}, ${PassengerName4Name}, ${PassengerName5Name}`

               }
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                if(tripType=="One_way"){
                    var oTravel = {
                        "travelId": "",
                        "empId_Empid": PassengerName1ID,
                        "empName_Empid": PassengerName1Name,
                        "origin": origin,
                        "destination": destination,
                        "dateOfDeparture": `${depDate}-${depMonth}-${depYear}`,
                        "dateOfArrival": `${arrDate}-${arrMonth}-${arrYear}`,
                        "dateOfReturn": "",
                        "description": "Welcome buddy",
                        "price": null,
                        "travelStatus": "INP",
                        "noOfDays": NumberOfdays,
                        "noOfPassengers": NumberOfPassenger,
                        "passengerName":PassengerNameData,
                        "travelType": travelType,
                        "travelMode": travelMode,
                        "RoundTrip": tripType,
                        "Accomandation": "NO",
                        "billable": BillableCustomer
                    }
                }
                else if(tripType=="Round_Trip"){

                    var oTravel = {
                        "travelId": "",
                        "empId_Empid": PassengerName1ID,
                        "empName_Empid": PassengerName1Name,
                        "origin": origin,
                        "destination": destination,
                        "dateOfDeparture": `${depYear}-${depMonth}-${depDate}`,
                        "dateOfArrival": `${arrYear}-${arrMonth}-${arrDate}`,
                        "dateOfReturn": `${retYear}-${retMonth}-${retDate}`,
                        "description": "Welcome buddy",
                        "price": null,
                        "travelStatus": "INP",
                        "noOfDays": NumberOfdays,
                        "noOfPassengers": NumberOfPassenger,
                        "passengerName": PassengerNameData,
                        "travelType": travelType,
                        "travelMode": travelMode,
                        "RoundTrip": tripType,
                        "Accomandation": "YES",
                        "billable": BillableCustomer
                    }
                }

                var JsonData = JSON.stringify(oTravel)
                console.log(JsonData);

                let EndPoint = "/odata/v4/travel/insertTravel";
                fetch(EndPoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JsonData
                })
                    .then(function (res) {
                        if (res) {
                            console.log("Entity created successfully");
                            // MessageToast.show(`Travel Request Generate Successfully  Travel id=${travelId}`)
                            oRouter.navTo("RouteView1")
                            location.reload()
                            // oView.getModel().refresh()
                            // var oModel = this.getView("View1").getModel();
                            // oModel.refresh();
                            // console.log(res);
                        }
                        else {
                            console.log("Failed");
                        }
                    })
                    .catch(function (err) {
                        console.log("error", err);
                    })
            },




        });

    });