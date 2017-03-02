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
var LeadCartComponent = (function () {
    function LeadCartComponent(router, activatedRoute, leadInfoService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.leadInfoService = leadInfoService;
        // NEED ADVICE: Какая альтернатива для чтобы не ставить *ngif в разметке?  потому что ругается на то что нет свойства у inderfined, т.к. еще ничего туда не присвоили
        // если в конструктор даже запихнуть получение данных, то тоже жалуецо
        // этот вариант вообще унылый,  просто так оставила. Может надо использовать не интерфейс, а класс, 
        // и создавать экземпляр сразу, а в классе задать по умолчанию значения для свойств? 
        // persInfo: Leads = new Leads();
        this.persInfo = { id: null, name: '23' }; // <-----
    }
    ;
    LeadCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = +params["id"];
            _this.leadInfoService
                .getPhrase(id)
                .then(function (result) { return _this.persInfo = result; });
        });
    };
    LeadCartComponent.prototype.goToClientList = function () {
        this.router.navigate(["clients-registrations"]);
    };
    return LeadCartComponent;
}());
LeadCartComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "leadCart",
        templateUrl: "leadCart.component.html"
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        lead_info_service_1.LeadInfoService])
], LeadCartComponent);
exports.LeadCartComponent = LeadCartComponent;
//# sourceMappingURL=leadCart.component.js.map