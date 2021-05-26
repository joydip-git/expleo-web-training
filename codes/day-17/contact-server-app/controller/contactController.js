const { getContacts, getContactByPhone, deleteContact, addContact, updateContact } = require("../manager/contactManager")

const getContactsHandler = (req, res) => {
    let getAllPromise = getContacts()
    getAllPromise
        .then((data) => {
            let jsDataResponse = {
                message: 'records found',
                data: data
            }
            res.send(JSON.stringify(jsDataResponse))
        })
        .catch((err) => {
            let jsErrorResponse = {
                message: err,
                data: []
            }
            res.send(JSON.stringify(jsErrorResponse))
        })
}

const geContactByPhoneHandler = (req, res) => {
    if (req.params.phone) {
        let getPromise = getContactByPhone(parseInt(req.params.phone))
        getPromise
            .then(
                (data) => {
                    let jsDataResponse = {
                        message: 'record found',
                        data: data
                    }
                    res.send(JSON.stringify(jsDataResponse))
                })
            .catch((err) => {
                let jsErrorResponse = {
                    message: err,
                    data: []
                }
                res.send(JSON.stringify(jsErrorResponse))
            })
    }
}

const deleteContactHandler = (req, res) => {
    console.log(req.params.phone)
    /**
     * params:{id:2}
     */
    //console.log(typeof req.params.phone)
    let deletePromise = deleteContact(parseInt(req.params.phone))

    deletePromise
        .then(
            (data) => {
                let jsDataResponse = {
                    message: data,
                    data: []
                }
                res.send(JSON.stringify(jsDataResponse))
            })
        .catch(
            (err) => {
                let jsErrorResponse = {
                    message: err,
                    data: []
                }
                res.send(JSON.stringify(jsErrorResponse))
            })
}

const addContactHandler = (req, res) => {
    let addPromise = addContact(req.body)
    addPromise
        .then(res => {
            let jsDataResponse = {
                message: res,
                data: []
            }
            res.send(JSON.stringify(jsDataResponse));
        })
        .catch(err => {
            let jsErrorResponse = {
                message: err,
                data: []
            }
            res.send(JSON.stringify(jsErrorResponse));
        })
}

const updateContactHandler = (req, res) => {

}

module.exports = {
    getContactsHandler,
    geContactByPhoneHandler,
    deleteContactHandler,
    addContactHandler,
    updateContactHandler
}