const brcypt = require("bcryptjs");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");

const postRegister = async (req, res) => {
  try {
    const { username, mail, password } = req.body;

    //check if user exist
    const userExists = await User.exists({ mail: mail.toLowerCase() });
    if (userExists) {
      return res.status(409).send("Email already in use");
    }

    //encrypt password
    const encryptedPassword = await brcypt.hash(password, 10);

    //create user document and save to database
    const user = await User.create({
      username,
      mail: mail.toLowerCase(),
      password: encryptedPassword,
    });

    //create JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        mail,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );

    res.status(201).json({
      userDetails: {
        mail: user.mail,
        token: token,
        username: user.username,
      },
    });
  } catch (err) {
    return res.status(500).send("Error occur ");
  }
};
module.exports = postRegister;
