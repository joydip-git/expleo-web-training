import { Component } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  // selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
  // providers: [ContactService]
})
export class AddContactComponent {
  constructor(private serviceRef: ContactService) {

  }
  submitContact(formData: Contact) {
    console.log(formData)
    this.serviceRef.addContact(formData)
      .subscribe(
        resp => console.log(resp),
        e => console.log(e))
  }
}
