const express = require("express");
const router = express.Router();

const pollController = require("../controllers/pollController");

router.get("/poll/getAll", pollController.getAll);

router.get("/poll/getOne/:id", pollController.getOne);

module.exports = router;
