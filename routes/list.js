const router = require("express").Router();
const List = require("../models/List");
const verifyToken = require("../Verifications/verifyWebToken");

// CREATE
router.post("/", verifyToken, async (req, res) => {
  const newList = new List(req.body);
  // console.log(newList);
  try {
    const list = await newList.save();
    res.status(201).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});
// UPDATE
router.put("/:id", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedList = await List.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You are not allowed!");
  }
});

// DELETE
router.delete("/:id", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json("list has been deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You are not allowed!");
  }
});
// GetOne
router.get("/find/:id", async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GetAll & Random List
router.get("/", verifyToken, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list;
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          {
            $match: {
              type: typeQuery,
              genre: genreQuery,
            },
          },
          // {
          //   $sample: { size: 10 },
          // },
        ]);
      } else {
        list = await List.aggregate([
          {
            $match: {
              type: typeQuery,
            },
          },
          // { $sample: { size: 10 } },
        ]);
      }
    } else {
      // list = await List.aggregate([{ $sample: { size: 10 } }]);
      list = await List.find();
    }
    res.status(200).json(list.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});
// or
// router.get("/", verifyToken, async (req, res) => {
//   if (req.user.isAdmin) {
//     try {
//       const lists = await List.find();
//       res.status(200).json(lists.reverse());
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }
// });

module.exports = router;
