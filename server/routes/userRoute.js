const express = require("express");
const {
  registerUser,
  loginUser,
  findUser,
  getUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/find/:userId", findUser);

module.exports = router;
