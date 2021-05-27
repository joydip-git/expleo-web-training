import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators'
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
    templateUrl: './update-contact.component.html'
})

export class UpdateContactComponent {
    contact: any;
    constructor(private serviceRef: ContactService, private route: ActivatedRoute) {

        // let allParams = this.route.params;
        // console.log(allParams['phone'])
        let allParamsObs: Observable<Params> = this.route.params;
        allParamsObs.subscribe(
            params => {
                console.log(params)
                this.serviceRef.fetchContact(+params['phone'])
                    .subscribe(resp => this.contact = <Contact>resp.data)
            }
        )
        // allParamsObs
        //     .pipe(
        //         map((params: Params) => {
        //             console.log(params)
        //             this.serviceRef.fetchContact(+params['phone'])
        //         }
        //         )
        //     ).subscribe(r => console.log(r))

    }

    submitContact(formData: Contact) {
        console.log(formData)
        this.serviceRef.updateConatct(formData)
            .subscribe(
                resp => console.log(resp),
                e => console.log(e))
    }
}