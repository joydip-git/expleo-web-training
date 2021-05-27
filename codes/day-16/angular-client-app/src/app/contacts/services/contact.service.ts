// import { contacts } from "src/data/contacts";
import { Contact, ContactResponse } from "../models/contact.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// @Injectable({
//     providedIn: 'root'
// })
@Injectable()
export class ContactService {

    contactServiceURL = 'http://localhost:4001/contactservice'

    constructor(private http: HttpClient) {

    }
    public fetchContacts(): Observable<ContactResponse> {
        const obsResponse: Observable<object> = this.http.get(this.contactServiceURL);
        const obsContactResponse: Observable<ContactResponse> = <Observable<ContactResponse>>obsResponse;
        return obsContactResponse;
    }
    public fetchContact(phone: number): Observable<ContactResponse> {
        console.log(phone)
        return <Observable<ContactResponse>>this.http.get(`${this.contactServiceURL}/${phone}`);
    }
    public addContact(contact: Contact): Observable<ContactResponse> {
        return <Observable<ContactResponse>>this.http.post(this.contactServiceURL, contact);
    }
    public updateConatct(contact: Contact): Observable<ContactResponse> {
        return <Observable<ContactResponse>>this.http.put(this.contactServiceURL, contact);
    }
    public deleteContact(phone: number): Observable<ContactResponse> {
        return <Observable<ContactResponse>>this.http.delete(`${this.contactServiceURL}/${phone}`);
    }
}