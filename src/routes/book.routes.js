const { Router } = require("express");
const { addBook, getAllBooks, getBookById } = require("../controllers/book.controller.js");

const router = Router();

// add new book
router.route("/add").post(addBook);

// get all books
router.route("/get-all").get(getAllBooks);

// get book by id
router.route("/:id").get(getBookById);

module.exports = router;