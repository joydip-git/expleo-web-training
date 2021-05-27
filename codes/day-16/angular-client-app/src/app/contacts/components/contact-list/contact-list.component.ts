import { Component } from '@angular/core';
import { Contact, ContactResponse } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
    templateUrl: './contact-list.component.html'
})

export class ContactListComponent {

    contactRecords: Contact[] = [];
    filterText = ''

    constructor(private serviceRef: ContactService) {
        console.log(this.serviceRef)
        this.loadData()
    }

    deleteRecord(phone: any) {
        this.serviceRef.deleteContact(phone)
            .subscribe(
                (resp) => console.log(resp),
                (e) => console.log(e),
                //fetcthing updated data and reloading in the table again
                () => this.loadData()
            )
    }

    loadData() {
        this.serviceRef.fetchContacts()
            .subscribe(
                (cs: ContactResponse) => this.contactRecords = cs.data,
                (e) => console.log(e)
            )
    }
}