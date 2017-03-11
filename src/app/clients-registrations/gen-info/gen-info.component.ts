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
            
            this.leadInfoService //получаю данные
            .getPhrase(0) 
            .then(result => {
                this.userInfo = result;
            } )
            .then(()=>{
                this.lead = this.fb.group({
                    first_name: [this.userInfo['first_name'], [Validators.required, Validators.minLength(2)]], //смотреть сюда  this.userInfo['first_name']
                    last_name: ['', [Validators.required, Validators.minLength(2)]],
                    email: ['', [Validators.required, Validators.minLength(2)]],
                    mobile_numb: ['', [Validators.required, Validators.minLength(2)]],
                    phone_numb: ['', [Validators.required, Validators.minLength(2)]]
                });
            });
        };

    ngOnInit() {
        console.log(this.activatedRoute.snapshot.data);

        

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
