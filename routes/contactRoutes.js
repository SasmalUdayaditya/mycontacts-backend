const express = require("express");
const router = express.Router();
const { getAllContacts } = require("../controllers/contactControllers");

router.route("/").get(getAllContacts);

router.route("/").post((req, res) => {
  res.send("create contacts");
});

router.route("/:id").get((req, res) => {
  res.send("getting contact with id: " + req.params.id);
});

router.route("/:id").put((req, res) => {
  res.send("Updating contacts with id: " + req.params.id);
});

router.route("/:id").delete((req, res) => {
  res.send("Deleting contacts with id: " + req.params.id);
});

module.exports = router;
