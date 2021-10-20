const express = require("express");
const app = express();
// importing routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/list");

// MOGOOSE PACAGE FOR MONGODB CONNECTION !!!
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const mongodbConnection = async () => {
  await mongoose.connect(process.env.MONGO_URL, options);
};
mongodbConnection()
  .then(console.log("mongodb is connected"))
  .catch((err) => console.log(err));

// routes middleware
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movie", movieRoute);
app.use("/api/list", listRoute);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

// APP CONNECTING ON PORT
app.listen(process.env.PORT || 8800, () => {
  console.log("the app is running");
});
