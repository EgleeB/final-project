const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { dbConnection } = require("../db");
const { defaultCallback } = require("../helpers/dbHelpers");
const { verifyToken } = require("../helpers/authenticationUtils");

const router = express.Router();

router.post("/register", (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  console.log(hashedPassword);

  const adminQuery =
    "INSERT INTO admin (first_name, last_name, email, password) VALUES (?, ?, ?, ?)";

  dbConnection.execute(
    adminQuery,
    [first_name, last_name, email, hashedPassword],
    (err, result) => {
      defaultCallback(err, result, res);
    }
  );
});

router.post("/login", (req, res) => {
  const { body } = req;
  const { email, password } = body;

  const incorrectCredentialsResponse = () =>
    res.json({ message: "Incorrect email or password" });

  if (!email || !password) {
    incorrectCredentialsResponse();
    return;
  }

  dbConnection.execute(
    "SELECT * FROM admin WHERE email=?",
    [email],
    (err, result) => {
      if (result.length === 0) {
        incorrectCredentialsResponse();
      } else {
        const user = result[0];
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);

        const { id, email } = user;

        if (isPasswordCorrect) {
          const token = jwt.sign({ id, email }, process.env.JWT_SECRET);

          res.json({
            message: "Succesfully logged in!",
            token,
          });
        } else {
          incorrectCredentialsResponse();
        }
      }
    }
  );
});

router.get("/token/verify", verifyToken, (req, res) => {
  res.json(res.locals.user);
});
module.exports = router;
