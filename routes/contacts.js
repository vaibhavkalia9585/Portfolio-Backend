// routes/contacts.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// GET all contacts
router.get('/', async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
});

// GET contact by ID
router.get('/:id', async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.json(contact);
});

// POST new contact
router.post('/', async (req, res) => {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
});

// PUT update contact by ID
router.put('/:id', async (req, res) => {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedContact);
});

// DELETE contact by ID
router.delete('/:id', async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;
