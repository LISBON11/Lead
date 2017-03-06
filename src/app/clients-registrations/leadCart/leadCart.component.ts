import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { LeadInfoService } from "../../common/services/lead-info.service";
import { Leads } from "../../common/interfaces/leads";

@Component({
    moduleId: module.id,
    selector: "leadCart",
    templateUrl: "leadCart.component.html",
    styleUrls: ['leadCart.component.css', "../../common/shared-styles/plain-table.css"]
})
export class LeadCartComponent implements OnInit {
    // NEED ADVICE: Какая альтернатива для чтобы не ставить *ngif в разметке?  потому что ругается на то что нет свойства у inderfined, т.к. еще ничего туда не присвоили
    // если в конструктор даже запихнуть получение данных, то тоже жалуецо
    // этот вариант вообще унылый,  просто так оставила. Может надо использовать не интерфейс, а класс, 
    // и создавать экземпляр сразу, а в классе задать по умолчанию значения для свойств? 
    // persInfo: Leads = new Leads();
    leadInfo: Leads = { id: null, name:'load'}; // <-----
    cartRoutes: Object = {
        'general': 'General information',
        'marketing': 'Marketing information',
        'traiding': 'Traiding information'
    };
    currentRoute: String;
    temp: any;

    constructor (private router: Router,
        private activatedRoute: ActivatedRoute,
        private leadInfoService: LeadInfoService) {
            
        };

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"]; 
            this.leadInfoService
                .getPhrase(id) 
                .then(result => this.leadInfo = result);
            
            this.currentRoute = '12';
        });

        let last_segment = this.router.url.split('/').slice(-1)[0];
        this.currentRoute = this.cartRoutes[last_segment];
    };

    goToClientList() {
        this.router.navigate(["clients-registrations"]);
    };


 }