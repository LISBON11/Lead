import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

//routes
import { routes } from "./app.routes";

//modules
import { ClientsRegistrationsModule } from "root_index";

// components
import { AppComponent, 
         HeaderComponent, 
         HomeComponent,
         MainNavComponent, 
         BreadcrumbsComponent } from "root_index";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        ClientsRegistrationsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent, 
        HeaderComponent,
        MainNavComponent,
        BreadcrumbsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
