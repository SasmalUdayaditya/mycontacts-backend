const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/contactControllers");

router.route("/").get(getAllContacts).post(createContact);

router.route("/:id").get(getContactById).put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;
