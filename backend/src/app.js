require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const studentRoutes = require("./routes/student.routes.js");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/students", studentRoutes);

app.get("*", (req, res) => {
  res.status(404).send({ message: "Not found !" });
});

module.exports = app;
