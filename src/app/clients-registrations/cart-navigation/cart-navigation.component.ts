import { Component, Input } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";


@Component({
    moduleId: module.id,
    selector: "cart-nav",
    templateUrl: "cart-navigation.component.html",
    styleUrls: ['../../common/shared-styles/plain-table.css','cart-navigation.component.css']
})
export class CartNavComponent { 
    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,) {}

    @Input() currentRoute: String;
    cartRoutes: Object = {
        'general': 'General information',
        'marketing': 'Marketing information',
        'traiding': 'Traiding information'
    };

    routeSplit() {
            let last_segment = this.router.url.split('/').slice(-1)[0];
            this.currentRoute = this.cartRoutes[last_segment];
            console.log(this.currentRoute);
    }
}
