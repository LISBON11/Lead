import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";

import { LeadInfoService } from "../../common/services/lead-info.service";
import { Leads } from "../../common/interfaces/leads";

@Component({
    moduleId: module.id,
    selector: "leadCart",
    templateUrl: "leadCart.component.html",
    styleUrls: ['leadCart.component.css', "../../common/shared-styles/plain-table.css"]
})
export class LeadCartComponent implements OnInit {
    // NEED ADVICE: Какая альтернатива для чтобы не ставить *ngif в разметке?  потому что ругается на то что нет свойства у inderfined, т.к. еще ничего туда не присвоили
    // если в конструктор даже запихнуть получение данных, то тоже жалуецо
    // этот вариант вообще унылый,  просто так оставила. Может надо использовать не интерфейс, а класс, 
    // и создавать экземпляр сразу, а в классе задать по умолчанию значения для свойств? 
    // persInfo: Leads = new Leads();
    leadInfo: Leads = { id: null, name:'load'}; // <-----
    currentRoute: String = '123';
    leadId: any;
    cartRoutes: Object = {
        'general': 'Clients information',
        'marketing': 'Marketing information',
        'traiding': 'Traiding information'
    };

    constructor (private router: Router,
        private activatedRoute: ActivatedRoute,
        private leadInfoService: LeadInfoService) {};

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.leadId = +params["id"]; 
        });

         this.leadInfoService
                .getPhrase(this.leadId) 
                .then(result => this.leadInfo = result);
        
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
        this.router.events.subscribe((event) => { 
            if (event instanceof NavigationEnd) { 
                let last_segment = this.router.url.split('/').slice(-1)[0]; 
                this.currentRoute = this.cartRoutes[last_segment]; 
            } 
        })
    };

    goToClientList() {
        this.router.navigate(["clients-registrations"]);
    };
 }