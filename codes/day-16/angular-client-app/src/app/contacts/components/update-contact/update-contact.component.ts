import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators'
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
    templateUrl: './update-contact.component.html'
})

export class UpdateContactComponent implements OnInit {
    contact: any;
    constructor(private serviceRef: ContactService, private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {

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
        // console.log(formData)
        this.serviceRef.updateConatct(formData)
            .subscribe(
                resp => window.alert(resp.message),
                e => console.log(e),
                () => {
                    this.router.navigate(['/contacts/show'])
                }
            )
    }
}