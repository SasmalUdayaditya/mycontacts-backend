//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getAllContacts = (req, res) => {
  res.status(200).json({ message: "Fetching all contacts" });
};

//@desc Get contact by id
//@route GET /api/contacts
//@access public

const getContactById = (req, res) => {
  res.send("getting contact with id: " + req.params.id);
};

//@desc create contacts
//@route POST /api/contacts:id
//@access public

const createContact = (req, res) => {
  res.send("create contacts");
};

//@desc delete contact
//@route DELETE /api/contact
//@access public

const deleteContact = (req, res) => {
  res.send("Deleting contacts with id: " + req.params.id);
};

//@desc update contact by id
//@route DELETE /api/contacts:id
//@access public

const updateContact = (req, res) => {
  res.send("Updating contacts with id: " + req.params.id);
};

module.exports = {
  getAllContacts,
  updateContact,
  deleteContact,
  createContact,
  getContactById,
};
