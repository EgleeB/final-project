const express = require("express");
const { dbConnection } = require("../db");
const { defaultCallback } = require("../helpers/dbHelpers");

const router = express.Router();

router.post("/register", (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  const adminQuery =
    "INSERT INTO admin (first_name, last_name, email, password) VALUES (?, ?, ?, ?)";

  dbConnection.execute(
    adminQuery,
    [first_name, last_name, email, password],
    (err, result) => {
      defaultCallback(err, result, res);
    }
  );
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const adminQuery = "SELECT * FROM admin WHERE email = ? AND password = ?";

  dbConnection.execute(adminQuery, [email, password], (err, result) => {
    if (err) {
      res.status(500).json({ message: "Server error" });
      return;
    }
    if (result.length === 0) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }
    res.status(200).json({ message: "Login successful" });
  });
});

module.exports = router;
