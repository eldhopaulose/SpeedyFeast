const express = require("express");
const mongoose = require("mongoose");
const cros = require("cors");
require("dotenv").config();

const foodRoutes = require("./routes/Food");
const userRoutes = require("./routes/User");

const app = express();

app.use(cros());

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/food", foodRoutes);
app.use("/api/user", userRoutes);

const MONG_URI = process.env.MONG_URI;

mongoose
  .connect(MONG_URI)
  .then(() => {
    app.listen(Number(process.env.port) || 4000, () => {
      console.log("Connected Db & listening on port 4000");
    });
  })
  .catch((error) => {
    console.log("error connecting db");
    console.log(error);
  });
