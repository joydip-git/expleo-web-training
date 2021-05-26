// import { contacts } from "src/data/contacts";
import { Contact } from "../models/contact.model";
export class ContactService {
    contactServiceURL = 'http://localhost:4001/contactservice'
    constructor() {

    }
    /*
    public fetchContacts(): Contact[] {
        return contacts;
    }
    public fetchContact(phone: number): any {
        return contacts.find(c => c.phone === phone);
    }
    public addContact(contact: Contact): boolean {
        let status = false;
        const index = contacts.findIndex(c => c.phone === contact.phone);
        if (index === -1) {
            contacts.push(contact)
            status = true;
        }
        return status;
    }
    public updateConatct(contact: Contact): boolean {
        let status = false;
        const index = contacts.findIndex(c => c.phone === contact.phone);
        if (index !== -1) {
            contacts.splice(index, 1, contact)
            status = true;
        }
        return status;
    }
    public deleteContact(phone: number): boolean {
        let status = false;
        const index = contacts.findIndex(c => c.phone === phone);
        if (index !== -1) {
            contacts.splice(index, 1)
            status = true;
        }
        return status;
    }
    */
}