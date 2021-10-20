const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const Jwt = require("jsonWebToken");
const verifyToken = require("../Verifications/verifyWebToken");

// UPDATE
router.put("/:id", verifyToken, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res
      .status(401)
      .json("You are not admin and you can justs edit your account!");
  }
});

// DELETE
router.delete("/:id", verifyToken, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("user has been deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res
      .status(401)
      .json("You are not admin and you can justs delete your account!");
  }
});
// GetOne
router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});
// GetAll
router.get("/", verifyToken, async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(10)
        : await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});
// Get Users Statics (User Per Day)
router.get("/stats/today", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const data = await User.aggregate([
        {
          $project: {
            day: { $dayOfMonth: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$day",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});
// Get Users Statics (User Per Mounth)
router.get("/stats/month", verifyToken, async (req, res) => {
  // const today = new Date();
  // const lastYear = today.setFullYear(today.getFullYear() - 1);
  // console.log(lastYear);

  if (req.user.isAdmin) {
    try {
      const data = await User.aggregate([
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});
// Get Users Statics (User Per Year)
router.get("/stats/year", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const data = await User.aggregate([
        {
          $project: {
            year: { $year: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$year",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

module.exports = router;
