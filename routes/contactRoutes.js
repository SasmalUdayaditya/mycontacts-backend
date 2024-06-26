const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/contactControllers");

router.route("/").get(getAllContacts);

router.route("/").post(createContact);

router.route("/:id").get(getContactById);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;
