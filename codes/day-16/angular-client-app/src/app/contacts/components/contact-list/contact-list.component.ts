import { Component } from '@angular/core';
import { Contact, ContactResponse } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
    // selector: 'app-contacts',
    templateUrl: './contact-list.component.html'
    // providers: [ContactService]
})

export class ContactListComponent {
    //serviceRef: ContactService;
    contactData: Contact[] = [];
    filterText = ''

    constructor(private serviceRef: ContactService) {
        //this.serviceRef = serviceRef;
        console.log(this.serviceRef)
        this.loadData()
    }

    deleteRecord(phone: any) {
        this.serviceRef.deleteContact(phone)
            .subscribe(
                resp => console.log(resp),
                e => console.log(e),
                () => this.loadData()
            )
    }
    loadData() {
        this.serviceRef.fetchContacts()
            .subscribe(
                (cs: ContactResponse) => this.contactData = cs.data,
                (e) => console.log(e)
            )
    }
}