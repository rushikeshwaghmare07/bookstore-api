require("dotenv").config({});
const express = require("express");
const connectDB = require("./db/index.js");
const bookRoutes = require("./routes/book.routes.js")

const app = express();
const PORT = process.env.PORT || 8001;

// middleware
app.use(express.json());

// book routes
app.use("/api/books", bookRoutes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB connection error: ${err}`);
  });
