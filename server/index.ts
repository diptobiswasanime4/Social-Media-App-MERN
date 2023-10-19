const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  console.log(password);
  res.json({ username, password, msg: "Registered", success: true });
});

app.post("/login", (req, res) => {
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
