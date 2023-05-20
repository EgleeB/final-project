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
