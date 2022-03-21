const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth/authControllers");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(20).required(),
  password: Joi.string().min(6).max(20).required(),
  mail: Joi.string().email().required(),
});
const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
});
router.post(
  "/register",
  validator.body(registerSchema),
  authController.controllers.postRegister
);

router.post(
  "/login",
  validator.body(loginSchema),
  authController.controllers.postLogin
);

//test route to verify our middle ware is working
router.get("/test", auth, (req, res) => {
  res.send("Request passed");
});
module.exports = router;
