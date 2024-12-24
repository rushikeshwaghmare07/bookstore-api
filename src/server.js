require("dotenv").config({});
const express = require("express");
const connectDB = require("./db/index.js");

const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.json());

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB connection error: ${err}`);
  });
