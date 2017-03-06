"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var index_1 = require("./index");
// NEED ADVICE: Вот тут вот хотеолось бы обращаться по такому "../index"  урлу? т.е. из корневого индекса, я вроде собрала сервис в этот файл, но выдает ошибку
// Invalid provider for the NgModule 'ClientsRegistrationsModule' - only instances of Provider and Type are allowed
// import { LeadInfoService } from "../index";
var lead_info_service_1 = require("../common/services/lead-info.service");
var ClientsRegistrationsModule = (function () {
    function ClientsRegistrationsModule() {
    }
    return ClientsRegistrationsModule;
}());
ClientsRegistrationsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule],
        declarations: [
            index_1.ClientListComponent,
            index_1.LeadCartComponent,
            index_1.CartNavComponent,
            index_1.GenInfoComponent,
            index_1.MarketingInfoComponent,
            index_1.TradingInfoComponent
        ],
        providers: [lead_info_service_1.LeadInfoService]
    })
], ClientsRegistrationsModule);
exports.ClientsRegistrationsModule = ClientsRegistrationsModule;
//# sourceMappingURL=clients-registrations.module.js.map