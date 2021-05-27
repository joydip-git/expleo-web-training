import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { FormsModule } from "@angular/forms";
import { ContactsPipe } from "./pipes/contacts.pipe";
import { ContactRoutesModule } from "./contactroutes.module";
import { ContactDetailComponent } from "./components/contact-detail/contact-detail.component";
import { UpdateContactComponent } from "./components/update-contact/update-contact.component";
import { ContactService } from "./services/contact.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FilterContactComponent } from "./components/filter-contact/filter-contact.component";


@NgModule({
    //component, pipe, directives
    declarations: [ContactListComponent, AddContactComponent, ContactsPipe, ContactDetailComponent, UpdateContactComponent, FilterContactComponent],

    //moule names
    imports: [BrowserModule, FormsModule, ContactRoutesModule, HttpClientModule],

    //only service
    providers: [ContactService]

    //name of pipes/components/directives and modules
    // exports: [ContactListComponent, AddContactComponent,]
})
export class ContactsModule {

}