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
        component: index_1.LeadCartComponent
    }
];
//# sourceMappingURL=app.routes.js.map