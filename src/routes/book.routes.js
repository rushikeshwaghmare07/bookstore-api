const { Router } = require("express");
const { addBook, getAllBooks, getBookById, deleteBookById, updateBookById } = require("../controllers/book.controller.js");

const router = Router();

// add new book
router.route("/add").post(addBook);

// get all books
router.route("/get-all").get(getAllBooks);

// get book by id
router.route("/:id").get(getBookById);

// delete book by id
router.route("/:id").delete(deleteBookById);

// update book by id
router.route("/:id").put(updateBookById);

module.exports = router;