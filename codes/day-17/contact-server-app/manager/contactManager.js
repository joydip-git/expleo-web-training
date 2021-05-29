const fs = require('fs')
//service file/app: is a collection of operations/services
const getContacts = () => {
    //read all records from file and ??
    return new Promise((resolve, reject) => {
        fs.readFile('./data/contacts.json', (err, data) => {
            if (err) {
                reject(err)
                return;
            }
            resolve(JSON.parse(data));
        })
    })
}

const getContactByPhone = (phone) => {
    //read a particular product record from file and ???
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                './data/contacts.json',
                (err, data) => {
                    if (err) {
                        reject(err)
                        return;
                    }

                    let contacts = JSON.parse(data)
                    if (contacts.length == 0) {
                        reject('no records present')
                        return;
                    }

                    let found = contacts.find(p => p.phone === phone);
                    if (!found) {
                        reject('no such record exists')
                        return;
                    }
                    resolve(found)
                })
        })
}

const addContact = (contact) => {
    //adds a product record into file and ??
    return new Promise((resolve, reject) => {
        fs.readFile('./data/contacts.json', (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                let contacts = JSON.parse(data);
                if (contacts.length == 0) {
                    contacts.push(contact)
                    fs.writeFile(
                        './data/contacts.json',
                        JSON.stringify(contacts),
                        () => {
                            resolve('added successfully')
                        })

                } else {
                    let found = contacts.find(p => p.phone === contact.phone)
                    if (found) {
                        reject('product already exists')
                    } else {
                        contacts.push(contact);
                        fs.writeFile(
                            './data/contacts.json',
                            JSON.stringify(contacts),
                            () => {
                                resolve(contact)
                            })
                    }
                }
            }
        })
    })
}

const updateContact = (contact) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/contacts.json', (err, data) => {
            if (err) {
                reject(err)
                return;
            }

            if (data) {
                let contacts = JSON.parse(data)

                if (contacts.length == 0) {
                    reject('no records at all in the file')
                }
                else {
                    let index = contacts.findIndex((p) => p.phone === contact.phone)
                    if (index == -1) {
                        reject('no such contact found')
                    } else {
                        contacts.splice(index, 1, contact);
                        fs.writeFile(
                            './data/contacts.json',
                            JSON.stringify(contacts),
                            () => {
                                resolve(contact)
                            })
                    }
                }
            }
        })
    })
}

const deleteContact = (phone) => {
    //deletes a product record from file given the id of the product
    return new Promise((resolve, reject) => {
        fs.readFile('./data/contacts.json', (err, data) => {
            if (err) {
                reject(err)
                return;
            }

            if (data) {
                let contacts = JSON.parse(data)

                if (contacts.length == 0) {
                    reject('no records at all in the file')
                }
                else {
                    let index = contacts.findIndex((p) => p.phone === phone)
                    let found = contacts.find((p) => p.phone === phone)
                    if (index == -1) {
                        reject('no such contact found')
                    } else {
                        contacts.splice(index, 1);
                        fs.writeFile(
                            './data/contacts.json',
                            JSON.stringify(contacts),
                            () => {
                                resolve(found)
                            })
                    }
                }
            }
        })
    })
}
module.exports = {
    getContactByPhone,
    getContacts,
    addContact,
    deleteContact,
    updateContact
}