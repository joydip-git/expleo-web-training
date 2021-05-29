import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
    templateUrl: './contact-detail.component.html'
})

export class ContactDetailComponent implements OnInit {
    pageTitle = 'Contact Details of';
    contact: any;

    constructor(private route: ActivatedRoute, private serviceRef: ContactService, private router: Router) {

    }

    ngOnInit() {
        this.route.params.subscribe(allParams => {
            this.serviceRef.fetchContact(+allParams['phone'])
                .subscribe(resp => {
                    this.contact = <Contact>resp.data
                })
        })
    }
    goBack() {
        this.router.navigate(['/contacts/show'])
    }
}