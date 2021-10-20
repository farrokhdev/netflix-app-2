const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const Jwt = require("jsonWebToken");

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    isAdmin: req.body.isAdmin,
    profilePic: req.body.profilePic,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTO_SECRET_KEY
    ).toString(),
  });
  console.log(newUser);
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    !user &&
      res.status(404).json("user not found or the email or password is wrong");

    // ENCRYPTING PASSWORD
    const dcryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.CRYPTO_SECRET_KEY
    );
    const orginalPassword = dcryptedPassword.toString(CryptoJS.enc.Utf8);
    orginalPassword !== req.body.password &&
      res.status(404).json("the email or password is wrong");

    // CREATING JSON WEB TOKEN
    const accessToken = Jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;
    // console.log(info);

    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
