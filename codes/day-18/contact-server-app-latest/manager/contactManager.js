const { contactModel } = require('../models/contact')

const getContacts = () => {
    return new Promise((resolve, reject) => {
        contactModel.find((err, res) => {
            if (err)
                reject('no records found')
            if (res)
                resolve(res)
        })
    })
}

const getContactByPhone = (phone) => {
    return new Promise(
        (resolve, reject) => {
            contactModel.findOne({ phone: phone }, (err, res) => {
                if (err)
                    reject('no record found')
                if (res)
                    resolve(res)
            })
        })
}

const addContact = (contact) => {
    return new Promise((resolve, reject) => {
        contactModel.findOne({ phone: contact.phone }, (error, res) => {
            if (error) {
                reject(error)
                return;
            }
            if (!!res) {
                reject('record already exists')
                return;
            }
            const newContact = new contactModel(contact)
            newContact.save((error, res) => {
                if (error) {
                    reject(error)
                    return;
                }
                resolve(res)
            })
        })
    })
}

const updateContact = (contact) => {
    return new Promise((resolve, reject) => {
        contactModel.findOne({ phone: contact.phone }, (error, res) => {
            if (error) {
                reject(error)
                return;
            }
            if (!!res) {
                contactModel.replaceOne({ phone: contact.phone }, contact, {}, (error, res) => {
                    if (error) {
                        reject(error)
                        return;
                    }
                    resolve(res)
                })
                return;
            }
            reject('no such record exists')
        })
    })
}

const deleteContact = (phone) => {
    return new Promise((resolve, reject) => {
        contactModel.findOne({ phone: phone }, (error, res) => {
            if (error) {
                reject(error)
                return;
            }
            if (!!res) {
                contactModel.deleteOne({ phone: phone }, (error, res) => {
                    if (error) {
                        reject(error)
                        return;
                    }
                    resolve(res)
                })
                return;
            }
            reject('no such record exists')
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