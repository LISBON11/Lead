import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
}) 
export class AppComponent {

    constructor() {};

    user_info = {
        type: 'Admin',
        name: 'Best Admin Ever',
        img_src: 'src/assets/images/adminav.png'
    };
}   