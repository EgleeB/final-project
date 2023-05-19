const express = require("express");
const { dbConnection } = require("../db");
const { defaultCallback } = require("../helpers/dbHelpers");

const router = express.Router();

router.get("/participants", (req, res) => {
  dbConnection.query("SELECT * FROM participants", (err, result) => {
    defaultCallback(err, result, res);
  });
});

router.post("/participants", (req, res) => {
  const { first_name, last_name, email, phone_number } = req.body;

  const participantQuery =
    "INSERT INTO participants (first_name, last_name, email, phone_number) VALUES (?, ?, ?, ?)";

  dbConnection.execute(
    participantQuery,
    [first_name, last_name, email, phone_number],
    (err, result) => {
      defaultCallback(err, result, res);
    }
  );
});

module.exports = router;
