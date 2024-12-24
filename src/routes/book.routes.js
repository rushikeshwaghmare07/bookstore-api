const { Router } = require("express");
const { addBook, getAllBooks, getBookById, deleteBookById } = require("../controllers/book.controller.js");

const router = Router();

// add new book
router.route("/add").post(addBook);

// get all books
router.route("/get-all").get(getAllBooks);

// get book by id
router.route("/:id").get(getBookById);

// delete book by id
router.route("/:id").delete(deleteBookById);

module.exports = router;