"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CartNavComponent = (function () {
    function CartNavComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cartRoutes = {
            'general': 'General information',
            'marketing': 'Marketing information',
            'traiding': 'Traiding information'
        };
    }
    CartNavComponent.prototype.routeSplit = function () {
        var last_segment = this.router.url.split('/').slice(-1)[0];
        this.currentRoute = this.cartRoutes[last_segment];
        console.log(this.currentRoute);
    };
    return CartNavComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CartNavComponent.prototype, "currentRoute", void 0);
CartNavComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "cart-nav",
        templateUrl: "cart-navigation.component.html",
        styleUrls: ['../../common/shared-styles/plain-table.css', 'cart-navigation.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute])
], CartNavComponent);
exports.CartNavComponent = CartNavComponent;
//# sourceMappingURL=cart-navigation.component.js.map