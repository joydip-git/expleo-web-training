const router = require('express').Router();
const { getContactsHandler, geContactByPhoneHandler, addContactHandler, deleteContactHandler, updateContactHandler } = require('../controller/contactController');

//const router = Router();
const objectUri = '/contactservice'

router
    .get(objectUri, getContactsHandler);
router
    .get(`${objectUri}/:phone`, geContactByPhoneHandler)
router
    .delete(`${objectUri}/:phone`, deleteContactHandler)
router
    .post(objectUri, addContactHandler)
router
    .put(objectUri, updateContactHandler)

module.exports = { router }