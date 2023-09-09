"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const authRouter = require("./auth/routes");
const taskRouter = require('./routes/tasks.route');

// App Level MW
app.use(cors());
app.use(express.json());

// Routes
app.use(authRouter);
app.use(taskRouter);



app.get("/", (req, res) => {
  res.status(200).send("Welcome ");
});

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
