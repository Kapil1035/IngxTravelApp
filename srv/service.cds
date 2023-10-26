using {travel as t} from '../db/schema';

service travelService {


    entity Employee as projection on t.Employee;
    entity client as projection on t.Client;
    @odata.draft.enabled
    @cds.redirection.target
    entity Travel as projection on t.Travel actions{
    action rejectTravel();
    action acceptTravel();

    };
    entity insertTravel as projection on t.Travel;
    entity NationalCities as projection on t.NationalCities

}