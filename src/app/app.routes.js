"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var root_index_1 = require("root_index");
exports.routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: root_index_1.HomeComponent
    },
    {
        path: "clients-registrations",
        component: root_index_1.ClientListComponent
    },
    {
        path: "clients-registrations/:id",
        component: root_index_1.LeadCartComponent,
        children: [
            { path: '', redirectTo: 'general', pathMatch: 'full' },
            {
                path: 'general',
                component: root_index_1.GenInfoComponent,
                data: {
                    headerText: 'General information'
                }
            },
            {
                path: 'marketing',
                component: root_index_1.MarketingInfoComponent,
                data: {
                    titheaderTextle: 'Marketing information'
                }
            },
            {
                path: 'traiding',
                component: root_index_1.TradingInfoComponent,
                data: {
                    headerText: 'Traiding information'
                }
            }
        ]
    }
];
//# sourceMappingURL=app.routes.js.map