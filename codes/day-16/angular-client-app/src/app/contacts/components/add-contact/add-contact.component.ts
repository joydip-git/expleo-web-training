import { Component } from '@angular/core';
import { updateContact } from '../../../../data/contacts';

@Component({
  // selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  submitContact(formData: any) {
    //console.log(formData)
    updateContact(formData)
  }
}
