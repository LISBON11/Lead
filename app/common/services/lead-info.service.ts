import { Injectable } from "@angular/core";

import { Leads } from "./leads";

let phrases = [new Leads(1,'Liza'),new Leads(2,'Liza2'),new Leads(3,'Liza3')];

let phrasesPromise = Promise.resolve(phrases);

@Injectable()
export class LeadInfoService {

    getAll(): Promise<Leads[]> {
        return phrasesPromise;
    }

    getPhrase(id: number): Promise<Leads> {
        return phrasesPromise
            .then(phrases => phrases.find(x => x.id == id));
    }
}

