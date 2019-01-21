const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

router.route("/register").post(userController.register);
router.post("/login", userController.login);

router.post("/create", authController.authorize, userController.createPoll);
router.get("/myPolls", authController.authorize, userController.myPolls);
router.post("/vote", userController.vote);

module.exports = router;
