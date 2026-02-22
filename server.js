
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// fake database (temporary)
let users = [];

// save user
app.post("/saveUser", (req, res) => {
  const { name } = req.body;
  users.push({ name });
  res.send("User saved");
});

// get users (FOR POSTMAN)
app.get("/users", (req, res) => {
  res.json(users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on " + PORT));
