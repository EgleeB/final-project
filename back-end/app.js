require("dotenv").config();
const express = require("express");
const cors = require("cors");

const participantsRouter = require("./routes/participants");
const authentificationRouter = require("./routes/authentification");

const app = express();

app.use(express.json());
app.use(cors());
app.use(participantsRouter);
app.use(authentificationRouter);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
