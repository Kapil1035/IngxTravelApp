using {
    managed,
    cuid,
    sap.common.CodeList


} from '@sap/cds/common';


namespace travel;


type Status


: String enum {


    Approved      = 'APD';


    Inprogress    = 'INP';


    Reject        = 'RJT'


}


type NOp           : String enum {


    one           = '1';


    two           = '2';


    three         = '3';


    four          = '4';


    five          = '5'


}


type TType         : String enum {


    National      = 'National';


    International = 'International';


}


type Mode          :


String enum {


    Flight        = 'Flight';


    Train         = 'Train';


    Car           = 'Car';


    Other         = 'Other'


}


type RoundTrip     : String enum {


    OneWay        = 'OneWay';


    TwoWay        = 'TwoWay';


}


type Billable      : String enum {


    Yes           = 'Yes';


    No            = 'No'


}


type Accomandation : String enum {


    Yes           = 'Yes';


    No            = 'No'


}


entity Employee {


    key Empid        : String;
        Name         : String;
        email        : String;
        phone_number : String;
        designation  : String;
        dateofBirth  : Date;
        department   : String;

        Travel       : Composition of many Travel    on Travel.empId = $self;


}


entity NationalCities {


    cityName : String;


}


entity Travel {


   key travelId     : String;
    empId           : Association to Employee;
    empName         : Association to Employee;
    origin          : String;
    destination     : String;
    dateOfDeparture : String;
    dateOfArrival   : String;
    dateOfReturn    : String;
    description     : String;
    price           : Integer;
    travelStatus    : Status;
    noOfDays        : Integer;
    noOfPassengers  : NOp;
    passengerName   : array of String;
    travelType      : TType;
    travelCity      : Association to NationalCities;
    travelMode      : Mode;
    RoundTrip       : RoundTrip;
    Accomandation   : Accomandation;
    billable        : Billable;
}
