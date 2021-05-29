import { Pipe, PipeTransform } from "@angular/core";
import { Contact } from "../models/contact.model";

@Pipe({
    name: 'contactfilter'
})
export class ContactsPipe implements PipeTransform {
    transform(records: Contact[], ...args: string[]): Contact[] {
        // console.log(records)
        // console.log(args)
        // let filterText = args[0];
        // if (filterText !== '') {
        //     const filteredRecords = [];
        //     filterText = filterText.toLocaleLowerCase()
        //     for (const contact of records) {
        //         let name = contact.name.toLocaleLowerCase()
        //         if (name.indexOf(filterText) !== -1) {
        //             filteredRecords.push(contact)
        //         }
        //     }
        //     return filteredRecords;
        // } else
        //     return records;

        return args[0] !== '' ?
            records.filter(r => r.name.indexOf(args[0].toLocaleLowerCase()) !== -1)
            : records;
    }
}