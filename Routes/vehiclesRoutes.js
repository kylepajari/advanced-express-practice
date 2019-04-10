const express = require("express");
const router = express.Router();
const controller = require("../Controllers/vehiclesController");

router.get("/vehicles", (req, res) => res.json(controller.list()));

router.get("/vehicles/:Id", (req, res) => {
  res.send(controller.show(req.params.Id));
});

router.post("/vehicles", (req, res) => {
  res.send(controller.create(req.body));
});

module.exports = router;
