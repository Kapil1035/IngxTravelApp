using {travel as t} from '../db/schema';

service travelService {


    entity Employee as projection on t.Employee;

    @odata.draft.enabled
    @cds.redirection.target
    entity Travel as projection on t.Travel actions{
    action rejectTravel();
    action acceptTravel();

    };
    
    entity insertTravel as projection on t.Travel;
    entity NationalCities as projection on t.NationalCities

}