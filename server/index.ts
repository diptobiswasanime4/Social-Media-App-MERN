const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const User = require("./models/User");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Error connecting to DB.", err));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  console.log(password);
  const userDoc = await User.find({ username });
  if (userDoc) {
    res.json({ msg: "User already exists", success: false });
  } else {
    res.json({ username, password, msg: "Registered", success: true });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  console.log(password);
  res.json({ username, password, msg: "Logged In", success: true });
});

app.get("/profile", (req, res) => {
  res.send("Profile Page");
});

app.post("/logout", (req, res) => {
  res.send("Logout");
});

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});
