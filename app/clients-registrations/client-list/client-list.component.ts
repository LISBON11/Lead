import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"

import { LeadInfoService } from "../../common/services/lead-info.service";
import { Leads } from "../../common/services/leads";


@Component({
    moduleId: module.id,
    selector: "client-list",
    templateUrl: "client-list.component.html"
})
export class ClientListComponent implements OnInit { 
    clientList : Leads[];

    constructor ( private router: Router,
        private leadInfoService: LeadInfoService ) {};

    ngOnInit() {
        this.leadInfoService 
            .getAll()   
            .then(result => this.clientList = result); 
    }

    onSelect(selected: {id: number}) {
        this.router.navigate(["clients-registrations", selected.id]);
    }
}
