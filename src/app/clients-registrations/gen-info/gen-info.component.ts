import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from "@angular/router";

import { LeadInfoService } from "../../common/services/lead-info.service";

@Component({
    moduleId: module.id,
    selector: "general-info",
    templateUrl: "gen-info.component.html"
})
export class GenInfoComponent implements OnInit { 
    user: FormGroup;
    userInfo : {};

    constructor(private fb: FormBuilder,
        private leadInfoService: LeadInfoService,
        private activatedRoute:ActivatedRoute) {};

    ngOnInit() {
        //NEED HELP: айдишник я уде получала в родительском компоненте,  его лучше передать или еще раз вытащить?
        let id : number;

        this.activatedRoute.params.subscribe((params: Params) => {
            id = +params["id"]; 
        });
        //

        this.leadInfoService
            .getPhrase(id) 
            .then(result => this.userInfo = result);

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
