//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getAllContacts = (req, res) => {
  res.status(200).json({ message: "Fetching all contacts" });
};

module.exports = { getAllContacts };
