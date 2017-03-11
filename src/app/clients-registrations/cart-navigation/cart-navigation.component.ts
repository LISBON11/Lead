import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "cart-nav",
    templateUrl: "cart-navigation.component.html",
    styleUrls: ['../../common/shared-styles/plain-table.css','cart-navigation.component.css']
})
export class CartNavComponent implements OnInit  { 

    constructor (private router: Router,
        private activatedRoute: ActivatedRoute) {};

    ngOnInit() {

    };

    goToClientList() {
        console.log(this.activatedRoute.snapshot.children[0].data);
    };
}
