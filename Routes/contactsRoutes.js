const express = require("express");
const router = express.Router();
const controller = require("../Controllers/contactsController");

router.get("/contacts", (req, res) => res.json(controller.list()));

router.get("/contacts/:Id", (req, res) => {
  res.send(controller.show(req.params.Id));
});

router.post("/contacts", (req, res) => {
  contacts.push(req.body);
  res.send(contacts);
});

module.exports = router;
