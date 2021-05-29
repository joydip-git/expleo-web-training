import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact, ContactResponse } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
    templateUrl: './contact-list.component.html'
})

export class ContactListComponent implements OnInit, OnDestroy {

    contactRecords: Contact[] = [];
    parentFilterText = ''
    contactSubscription: any;
    constructor(private serviceRef: ContactService) {
    }
    onfilterTextChanged(filterText: string) {
        console.log(filterText)
        this.parentFilterText = filterText;
    }
    // changeText() {
    //     this.parentFilterText = 'ph'
    // }
    //X-->OnX -->ngOnX
    ngOnInit() {
        this.loadData();
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
        this.contactSubscription = this.serviceRef.fetchContacts()
            .subscribe(
                (cs: ContactResponse) => this.contactRecords = cs.data,
                (e) => console.log(e)
            )
    }
    ngOnDestroy() {
        // console.log(this.contactSubscription)
        this.contactSubscription.unsubscribe()
    }
}