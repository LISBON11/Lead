import { Injectable } from "@angular/core";
import { Leads } from "../interfaces/leads";

let leads = [{id:1,name:'liza'},{id:2,name:'liza2'},{id:3,name:'liza3'}];

let leadsPromise = Promise.resolve(leads);

@Injectable()
export class LeadInfoService {

    getAll(): Promise<Leads[]> {
        return leadsPromise;
    }

    getPhrase(id: number): Promise<Leads> {
        return leadsPromise
            .then(leads => leads.find(x => x.id == id));
    }
}


var a = {
    0: {
        name: 'liza',
        id : 0
    } ,
    1: {
        name: 'liza1',
        id : 1
    } 
}
