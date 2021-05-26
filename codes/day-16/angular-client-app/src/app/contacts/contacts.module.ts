import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { FormsModule } from "@angular/forms";
import { ContactsPipe } from "./pipes/contacts.pipe";
import { ContactRoutesModule } from "./contactroutes.module";
import { ContactDetailComponent } from "./components/contact-detail/contact-detail.component";
import { UpdateContactComponent } from "./components/update-contact/update-contact.component";

@NgModule({
    //component, pipe, directives
    declarations: [ContactListComponent, AddContactComponent, ContactsPipe, ContactDetailComponent, UpdateContactComponent],
    imports: [BrowserModule, FormsModule, ContactRoutesModule],
    // exports: [ContactListComponent, AddContactComponent,]
})
export class ContactsModule {

}