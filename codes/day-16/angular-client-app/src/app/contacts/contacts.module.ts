import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { AddContactComponent } from './add-contact/add-contact.component';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [ContactListComponent, AddContactComponent],
    imports: [BrowserModule, FormsModule],
    exports: [ContactListComponent, AddContactComponent]
})
export class ContactsModule {

}