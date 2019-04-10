const express = require("express");
const router = express.Router();
const controller = require("../Controllers/productsController");

router.get("/products", (req, res) => res.json(controller.list()));

router.get("/products/:Id", (req, res) => {
  res.send(controller.show(req.params.Id));
});

router.post("/products", (req, res) => {
  res.send(controller.create(req.body));
});

module.exports = router;
