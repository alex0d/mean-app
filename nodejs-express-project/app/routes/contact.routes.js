const express = require('express');
const contacts = require("../controllers/contact.controller.js");

const router = express.Router();

router.post("/", contacts.create);

// Retrieve all Contacts
router.get("/", contacts.findAll);

// Retrieve a single Contact with id
router.get("/:id", contacts.findOne);

// Update a Contact with id
router.put("/:id", contacts.update);

// Delete a Contact with id
router.delete("/:id", contacts.delete);

// Delete all Contacts
router.delete("/", contacts.deleteAll);

module.exports=router;