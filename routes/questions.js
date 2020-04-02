const express = require("express");

const router = express.Router();

const questionController = require("../controller/questionController");

//different routes
router.post("/create", questionController.addQuestion);

module.exports = router;