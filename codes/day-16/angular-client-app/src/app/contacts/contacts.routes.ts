import { Routes } from "@angular/router";
import { AddContactComponent } from "./components/add-contact/add-contact.component";
import { ContactDetailComponent } from "./components/contact-detail/contact-detail.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { UpdateContactComponent } from "./components/update-contact/update-contact.component";

export const contactsRoutes: Routes = [
    { path: 'contacts/show', component: ContactListComponent },
    { path: 'contacts/add', component: AddContactComponent },
    { path: 'contacts/show/:id', component: ContactDetailComponent },
    { path: 'contacts/update/:id', component: UpdateContactComponent }
]