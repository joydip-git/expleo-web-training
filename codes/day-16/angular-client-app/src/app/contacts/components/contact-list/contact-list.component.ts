import { Component } from '@angular/core';
import { contacts } from '../../../../data/contacts'

@Component({
    // selector: 'app-contacts',
    templateUrl: './contact-list.component.html'
})

export class ContactListComponent {
    contactData = contacts
    filterText = ''
}