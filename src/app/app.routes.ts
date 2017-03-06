import { Routes } from "@angular/router";

import { HomeComponent, 
         ClientListComponent, 
         LeadCartComponent, 
         GenInfoComponent, 
         MarketingInfoComponent, 
         TradingInfoComponent } from "root_index";

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
        component: LeadCartComponent,
        children: [
            { path: '', redirectTo: 'general', pathMatch: 'full' },
            { path: 'general', component: GenInfoComponent },
            { path: 'marketing', component: MarketingInfoComponent },
            { path: 'traiding', component: TradingInfoComponent }
        ]
    }
];