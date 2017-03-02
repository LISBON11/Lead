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
var lead_info_service_1 = require("../../common/services/lead-info.service");
var ClientListComponent = (function () {
    function ClientListComponent(router, leadInfoService) {
        this.router = router;
        this.leadInfoService = leadInfoService;
    }
    ;
    ClientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leadInfoService
            .getAll()
            .then(function (result) { return _this.clientList = result; });
    };
    ClientListComponent.prototype.onSelect = function (selected) {
        this.router.navigate(["clients-registrations", selected.id]);
    };
    return ClientListComponent;
}());
ClientListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "client-list",
        templateUrl: "client-list.component.html"
    }),
    __metadata("design:paramtypes", [router_1.Router,
        lead_info_service_1.LeadInfoService])
], ClientListComponent);
exports.ClientListComponent = ClientListComponent;
//# sourceMappingURL=client-list.component.js.map