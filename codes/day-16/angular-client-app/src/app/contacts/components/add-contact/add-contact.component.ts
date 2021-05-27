import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({

  //use selector if you want to use it as nested component
  //not required if it is going to be loaded because of route change
  // selector: 'app-add-contact',

  //component-level provider for ContactService
  // providers: [ContactService]

  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  constructor(private serviceRef: ContactService, private router: Router) {

  }

  submitContact(formData: any) {
    console.log(formData)
    this.serviceRef.addContact({ name: formData.name, email: formData.email, phone: formData.phone })
      .subscribe(
        resp => window.alert(resp.message),
        e => console.log(e),
        () => {
          this.router.navigate(['/contacts/show'])
        })
  }
}
