"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
exports.routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: index_1.HomeComponent
    },
    {
        path: "clients-registrations",
        component: index_1.ClientListComponent
    },
    {
        path: "clients-registrations/:id",
        component: index_1.LeadCartComponent,
        children: [
            { path: '', redirectTo: 'general', pathMatch: 'full' },
            { path: 'general', component: index_1.GenInfoComponent },
            { path: 'marketing', component: index_1.MarketingInfoComponent },
            { path: 'traiding', component: index_1.TradingInfoComponent }
        ]
    }
];
//# sourceMappingURL=app.routes.js.map