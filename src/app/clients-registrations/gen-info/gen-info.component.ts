import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from "@angular/router";

import { LeadInfoService } from "../../common/services/lead-info.service";

@Component({
    moduleId: module.id,
    selector: "general-info",
    templateUrl: "gen-info.component.html",
    styleUrls: ['gen-info.component.css']
})
export class GenInfoComponent implements OnInit { 
    user: FormGroup;
    lead: FormGroup;
    userInfo : {};

    constructor(private fb: FormBuilder,
        private leadInfoService: LeadInfoService,
        private activatedRoute:ActivatedRoute) {
            
            //NEED HELP: как тут вытащить id который был в параметрах предыдущего роута?
            //сейчас всегда ищу по id=0
            this.leadInfoService
            .getPhrase(0) 
            .then(result => {
                this.userInfo = result;
                
            } );
        };

    ngOnInit() {
        //NEED HELP:Почему тут выводит underfined? Ведь constructor срабатывает первее чем ngOnInit  и в this.userInfo уже должны быть данные?
        //или он не ждет пока выполнится конструктор полностью(вааат)
        console.log(this.userInfo);
        

        this.lead = this.fb.group({
            first_name: ['', [Validators.required, Validators.minLength(2)]],
            last_name: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.minLength(2)]],
            mobile_numb: ['', [Validators.required, Validators.minLength(2)]],
            phone_numb: ['', [Validators.required, Validators.minLength(2)]],
            last_name1: this.fb.group({
                email: ['', Validators.required],
                confirm: ['', Validators.required]
            })
        });

        this.user = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            account: this.fb.group({
                email: ['', Validators.required],
                confirm: ['', Validators.required]
            })
        });
    }

    onSubmit() {
        console.log(this.user.value);
    }
}
