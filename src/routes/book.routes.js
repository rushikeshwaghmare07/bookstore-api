const { Router } = require("express");
const { addBook, getAllBooks } = require("../controllers/book.controller.js");

const router = Router();

// add new book
router.route("/add").post(addBook);

// get all books
router.route("/get-all").get(getAllBooks);

module.exports = router;