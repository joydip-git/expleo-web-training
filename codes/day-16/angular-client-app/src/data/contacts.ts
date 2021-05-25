export const contacts = [{
    name: 'anil',
    email: 'anil@gmail.com',
    phone: 90909090090
},
{
    name: 'sunil',
    email: 'sunil@gmail.com',
    phone: 90909090091

}]
export function updateContact(contact: any) {
    contacts.push(contact)
}

