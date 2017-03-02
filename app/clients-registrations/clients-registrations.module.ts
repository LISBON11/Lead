import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientListComponent, LeadCartComponent } from "./index";

// NEED ADVICE: Вот тут вот хотеолось бы обращаться по такому "../index"  урлу? т.е. из корневого индекса, я вроде собрала сервис в этот файл, но выдает ошибку
// Invalid provider for the NgModule 'ClientsRegistrationsModule' - only instances of Provider and Type are allowed
// import { LeadInfoService } from "../index";
import { LeadInfoService } from "../common/services/lead-info.service";

@NgModule({
    imports: [CommonModule],
    declarations: [
        ClientListComponent,
        LeadCartComponent
    ],
    providers: [LeadInfoService]
})
export class ClientsRegistrationsModule {

}