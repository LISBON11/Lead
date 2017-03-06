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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var lead_info_service_1 = require("../../common/services/lead-info.service");
var GenInfoComponent = (function () {
    function GenInfoComponent(fb, leadInfoService, activatedRoute) {
        this.fb = fb;
        this.leadInfoService = leadInfoService;
        this.activatedRoute = activatedRoute;
    }
    ;
    GenInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //NEED HELP: айдишник я уде получала в родительском компоненте,  его лучше передать или еще раз вытащить?
        var id;
        this.activatedRoute.params.subscribe(function (params) {
            id = +params["id"];
        });
        //
        this.leadInfoService
            .getPhrase(id)
            .then(function (result) { return _this.userInfo = result; });
        this.user = this.fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            account: this.fb.group({
                email: ['', forms_1.Validators.required],
                confirm: ['', forms_1.Validators.required]
            })
        });
    };
    GenInfoComponent.prototype.onSubmit = function () {
        console.log(this.user.value);
    };
    return GenInfoComponent;
}());
GenInfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "general-info",
        templateUrl: "gen-info.component.html"
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        lead_info_service_1.LeadInfoService,
        router_1.ActivatedRoute])
], GenInfoComponent);
exports.GenInfoComponent = GenInfoComponent;
//# sourceMappingURL=gen-info.component.js.map