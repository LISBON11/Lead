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
        this.leadInfo = { id: null, name: 'load' }; // <-----
        this.currentRoute = '123';
        this.cartRoutes = {
            'general': 'General information',
            'marketing': 'Marketing information',
            'traiding': 'Traiding information'
        };
    }
    ;
    LeadCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        this.activatedRoute.params.subscribe(function (params) {
            id = +params["id"];
        });
        this.leadInfoService
            .getPhrase(id)
            .then(function (result) { return _this.leadInfo = result; });
        // NEED HELP: Я тут хочу как бы подписаться на изменение урла,  чтобы в шаблон выводить заголовок в зависимости от вкладки
        // 1) Пробовала сделать через дочерний компонент навигации и сюда передавать даынне по клику,  но там такая фишка получается, что при
        // клике он читает текущий урл, получает значение текущего сегмента, потом делает редирект (на другой урл)  и значение что я получила как бы не актульно 
        // и отстает на 1 клик,  может можно как то поставить обработчик после смены урла? Или как вообще лучше это реализовать
        // 2) **- нормальный способ получить последний сегмент или есть более лаконичный вроде location
        // 3) я еще пробовала способ через  output,  в дочернем компоненте прописываю
        // @Output header = new EventEmitter<string>();
        // ngOnInit() {
        //   this.route
        //   .data
        //   .subscribe(subInfo => {
        //        this.headerText = subInfo['headerText'];  -чтобы читать инфу из роутов, так же вроде красивее чем объект с соответсвием в компоненте
        //
        //        this.header.emit(this.headerText)
        //   });
        //}
        // но через что из свзявать? Если вешаю на router-outlet,  то в разметке он пустой и скорее как метка для подргрузки компонента и получается,
        // что переменные не свзяываются
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                var last_segment = _this.router.url.split('/').slice(-1)[0];
                _this.currentRoute = _this.cartRoutes[last_segment];
            }
        });
    };
    ;
    LeadCartComponent.prototype.goToClientList = function () {
        this.router.navigate(["clients-registrations"]);
    };
    ;
    return LeadCartComponent;
}());
LeadCartComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "leadCart",
        templateUrl: "leadCart.component.html",
        styleUrls: ['leadCart.component.css', "../../common/shared-styles/plain-table.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        lead_info_service_1.LeadInfoService])
], LeadCartComponent);
exports.LeadCartComponent = LeadCartComponent;
//# sourceMappingURL=leadCart.component.js.map