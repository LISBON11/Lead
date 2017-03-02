import { Injectable } from "@angular/core";
import { Leads } from "../interfaces/leads";
import { leadList } from "../db_files/lead_list";

let leads = Object.values(leadList);
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



