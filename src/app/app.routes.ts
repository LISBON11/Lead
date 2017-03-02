import { Routes } from "@angular/router";

import { HomeComponent, ClientListComponent, LeadCartComponent } from "./index";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "clients-registrations",
        component: ClientListComponent
    },
    {
        path: "clients-registrations/:id",
        component: LeadCartComponent
    }
];