const express = require("express");
const router = express.Router();
const controller = require("../Controllers/commentsController");

router.get("/comments", (req, res) => res.json(controller.list()));

router.get("/comments/:Id", (req, res) => {
  res.send(controller.show(req.params.Id));
});

router.post("/comments", (req, res) => {
  res.send(controller.create(req.body));
});

module.exports = router;
