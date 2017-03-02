"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var lead_list_1 = require("../db_files/lead_list");
var leads = Object.values(lead_list_1.leadList);
var leadsPromise = Promise.resolve(leads);
var LeadInfoService = (function () {
    function LeadInfoService() {
    }
    LeadInfoService.prototype.getAll = function () {
        return leadsPromise;
    };
    LeadInfoService.prototype.getPhrase = function (id) {
        return leadsPromise
            .then(function (leads) { return leads.find(function (x) { return x.id == id; }); });
    };
    return LeadInfoService;
}());
LeadInfoService = __decorate([
    core_1.Injectable()
], LeadInfoService);
exports.LeadInfoService = LeadInfoService;
//# sourceMappingURL=lead-info.service.js.map