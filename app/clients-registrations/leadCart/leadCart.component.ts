import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { LeadInfoService } from "../../common/services/lead-info.service";
import { Leads } from "../../common/services/leads";

@Component({
    moduleId: module.id,
    selector: "leadCart",
    templateUrl: "leadCart.component.html"
})
export class LeadCartComponent implements OnInit {
    // NEED ADVICE: Нормальная альтернатива для чтобы не ставить *ngif в разметке?
    // Воообще кажется что не очень, но как быть? 
    persInfo: Leads = new Leads(null,null); // <-----

    constructor (private router: Router,
        private activatedRoute: ActivatedRoute,
        private leadInfoService: LeadInfoService) {};

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"]; 
            this.leadInfoService
                .getPhrase(id) 
                .then(result => this.persInfo = result);
        });
    }

    goToClientList() {
        this.router.navigate(["clients-registrations"]);
    }
 }