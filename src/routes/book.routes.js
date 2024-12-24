const { Router } = require("express");
const { addBook } = require("../controllers/book.controller.js");

const router = Router();

// add new book
router.route("/add").post(addBook);

module.exports = router;