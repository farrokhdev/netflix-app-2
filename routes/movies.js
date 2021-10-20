const router = require("express").Router();
const Movie = require("../models/Movie");
const verifyToken = require("../Verifications/verifyWebToken");

// CREATE
router.post("/", verifyToken, async (req, res) => {
  const newMovie = new Movie(req.body);
  try {
    const movie = await newMovie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});
// UPDATE
router.put("/:id", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedMovie);
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
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("movie has been deleted.");
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
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});
// GetRandom
router.get("/random", async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "movies") {
      movie = await Movie.aggregate([
        {
          $match: {
            type: "movies",
          },
        },
        {
          $sample: {
            size: 1,
          },
        },
      ]);
    } else if (type === "series") {
      movie = await Movie.aggregate([
        {
          $match: {
            type: "series",
          },
        },
        {
          $sample: {
            size: 1,
          },
        },
      ]);
    } else {
      movie = await Movie.aggregate([
        {
          $sample: {
            size: 1,
          },
        },
      ]);
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});
// GetAll
// router.get("/all", verifyToken, async (req, res) => {
//   const query = req.query.new;
//   if (req.user.isAdmin) {
//     try {
//       const movies = query
//         ? await Movie.find().sort({ _id: -1 }).limit(5)
//         : await Movie.find();
//       res.status(200).json(movies);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }
// });
// or
// router.get("/all", verifyToken, async (req, res) => {
//   if (req.user.isAdmin) {
//     try {
//       const movies = await Movie.find();
//       res.status(200).json(movies.reverse());
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }
// });
// or
router.get("/all", verifyToken, async (req, res) => {
  const typeQuery = req.query.type;
  let movies;
  if (req.user.isAdmin) {
    try {
      if (typeQuery) {
        movies = await Movie.aggregate([
          {
            $match: {
              type: typeQuery,
            },
          },
        ]);
      } else {
        movies = await Movie.find();
      }
      res.status(200).json(movies.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  }
});
// Get Movies Statics (User Per Day)
router.get("/stats/today", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const data = await Movie.aggregate([
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
// Get Movies Statics (User Per Mounth)
router.get("/stats/month", verifyToken, async (req, res) => {
  // const today = new Date();
  // const lastYear = today.setFullYear(today.getFullYear() - 1);
  // console.log(lastYear);

  // const month = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];

  if (req.user.isAdmin) {
    try {
      const data = await Movie.aggregate([
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
// Get Movies Statics (User Per Year)
router.get("/stats/year", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const data = await Movie.aggregate([
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
