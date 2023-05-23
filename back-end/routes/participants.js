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
  const { admin_id, first_name, last_name, email, phone_number } = req.body;

  const participantQuery =
    "INSERT INTO participants (admin_id, first_name, last_name, email, phone_number) VALUES (?, ?, ?, ?, ? )";

  dbConnection.execute(
    participantQuery,
    [admin_id, first_name, last_name, email, phone_number],
    (err, result) => {
      defaultCallback(err, result, res);
    }
  );
});

router.delete("/participants/:id", (req, res) => {
  const { id } = req.params;

  dbConnection.execute(
    "DELETE FROM participants WHERE id=?",
    [id],
    (err, result) => defaultCallback(err, result, res)
  );
});

module.exports = router;
