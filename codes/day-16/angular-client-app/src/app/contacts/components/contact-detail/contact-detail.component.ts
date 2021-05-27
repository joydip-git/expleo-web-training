import { Component } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
    templateUrl: './contact-detail.component.html'
})

export class ContactDetailComponent {

    pageTitle = 'Contact Details of';
    contact: Contact = {
        name: 'joydip',
        email: 'JOYDIP@GMAIL.COM',
        phone: 9090909090
    }
    goBack() {

    }
}