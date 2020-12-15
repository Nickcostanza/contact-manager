const express = require('express');
const router = express.Router();


// @route GET api/contacts
// @desc Get all users contacts
// @access Private
router.get('/', (req, res) => {
    res.send('Get all contacts');
});

// @route POST api/contacts
// @desc add new contact
// @access Private
router.post('/', (req, res) => {
    res.send('Adding new Contacts');
});

// @route PUT api/contacts
// @desc update contacts
// @access Private
router.put('/:id', (req, res) => {
    res.send('Update Contact');
});

// @route DELETE api/contacts
// @desc Deleting contact
// @access Private
router.delete('/:id', (req, res) => {
    res.send('Deleting Contact');
});


module.exports = router;