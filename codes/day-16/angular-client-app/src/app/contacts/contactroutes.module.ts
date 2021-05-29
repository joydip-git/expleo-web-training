import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { contactsRoutes } from "./contacts.routes";


@NgModule({
    imports: [RouterModule.forRoot(contactsRoutes)],
    exports: [RouterModule]
})
export class ContactRoutesModule {

}