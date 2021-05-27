const { getContacts, getContactByPhone, deleteContact, addContact, updateContact } = require("../manager/contactManager")
const { generateResponse } = require("./responseGenerator")

const getContactsHandler = (req, res) => {
    let getAllPromise = getContacts()
    getAllPromise
        .then((data) => {
            let jsDataResponse = generateResponse(data, 'records found')
            res.send(jsDataResponse)
        })
        .catch((err) => {
            let jsErrorResponse = generateResponse([], err)
            res.send(jsErrorResponse)
        })
}

const geContactByPhoneHandler = (req, res) => {
    let getPromise = getContactByPhone(parseInt(req.params.phone))
    getPromise
        .then(
            (data) => {
                let jsDataResponse = generateResponse(data, 'record found')
                res.send(jsDataResponse)
            })
        .catch((err) => {
            let jsErrorResponse = generateResponse([], err)
            res.send(jsErrorResponse)
        })
    // }
}

const deleteContactHandler = (req, res) => {
    let deletePromise = deleteContact(parseInt(req.params.phone))

    deletePromise
        .then(
            (data) => {
                let jsDataResponse = generateResponse(data, 'record deleted')
                res.send(jsDataResponse)
            })
        .catch(
            (err) => {
                let jsErrorResponse = generateResponse([], err)
                res.send(jsErrorResponse)
            })
}

const addContactHandler = (req, res) => {
    let addPromise = addContact(req.body)
    addPromise
        .then(data => {
            let jsDataResponse = generateResponse(data, 'record added')
            res.send(jsDataResponse);
        })
        .catch(err => {
            let jsErrorResponse = generateResponse([], err)
            res.send(jsErrorResponse);
        })
}

const updateContactHandler = (req, res) => {
    let updatePromise = updateContact(req.body)
    updatePromise
        .then(data => {
            let jsDataResponse = generateResponse(data, 'record updated')
            res.send(jsDataResponse);
        })
        .catch(err => {
            let jsErrorResponse = generateResponse([], err)
            res.send(jsErrorResponse);
        })
}

module.exports = {
    getContactsHandler,
    geContactByPhoneHandler,
    deleteContactHandler,
    addContactHandler,
    updateContactHandler
}