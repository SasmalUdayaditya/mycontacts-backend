const asynHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getAllContacts = asynHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Get contact by id
//@route GET /api/contacts
//@access public

const getContactById = asynHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc create contacts
//@route POST /api/contacts:id
//@access public

const createContact = asynHandler(async (req, res) => {
  console.log("createContact", req.body); //used express.json()
  const { name, email, mobile } = req.body;
  if (!name || !email || !mobile) {
    console.log("createContact body is empty.");
    res.status(400);
    throw new Error("All fields are required!");
  }
  const contact = await Contact.create({
    name,
    email,
    mobile,
  });
  res.status(201).json(contact);
});

//@desc delete contact
//@route DELETE /api/contact
//@access public

const deleteContact = asynHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const deletedContact = await Contact.findByIdAndDelete(req.params.id);
  res.status(204).json(deletedContact);
});

//@desc update contact by id
//@route DELETE /api/contacts:id
//@access public

const updateContact = asynHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  // console.log("Type::-->", req);
  res.status(200).json(updateContact);
});

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
};
