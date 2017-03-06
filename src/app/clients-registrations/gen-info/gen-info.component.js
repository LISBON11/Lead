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
        var _this = this;
        this.fb = fb;
        this.leadInfoService = leadInfoService;
        this.activatedRoute = activatedRoute;
        //NEED HELP: как тут вытащить id который был в параметрах предыдущего роута?
        //сейчас всегда ищу по id=0
        this.leadInfoService
            .getPhrase(0)
            .then(function (result) {
            _this.userInfo = result;
        });
    }
    ;
    GenInfoComponent.prototype.ngOnInit = function () {
        //NEED HELP:Почему тут выводит underfined? Ведь constructor срабатывает первее чем ngOnInit  и в this.userInfo уже должны быть данные?
        //или он не ждет пока выполнится конструктор полностью(вааат)
        console.log(this.userInfo);
        this.lead = this.fb.group({
            first_name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            last_name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            mobile_numb: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            phone_numb: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            last_name1: this.fb.group({
                email: ['', forms_1.Validators.required],
                confirm: ['', forms_1.Validators.required]
            })
        });
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
        templateUrl: "gen-info.component.html",
        styleUrls: ['gen-info.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        lead_info_service_1.LeadInfoService,
        router_1.ActivatedRoute])
], GenInfoComponent);
exports.GenInfoComponent = GenInfoComponent;
//# sourceMappingURL=gen-info.component.js.map