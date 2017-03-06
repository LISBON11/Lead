import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "header-templ",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.css"]
})
export class HeaderComponent{
    constructor() {};

    user_info = {
        type: 'Admin',
        name: 'Best Admin Ever',
        img_src: 'src/assets/images/adminav.png'
    };
 }