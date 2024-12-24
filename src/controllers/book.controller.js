const { default: mongoose } = require("mongoose");
const Book = require("../models/book.model.js");

const addBook = async (req, res) => {
  const { title, author, year } = req.body;

  if (!title || !author || !year) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  try {
    const newBook = await Book.create({
      title,
      author,
      year,
    });

    return res.status(201).json({
      success: true,
      data: newBook,
      message: "Book added successfully.",
    });
  } catch (error) {
    console.error("Error in addBook controller:", error.message);
    return res.status(500).json({
      success: false,
      message: "Unable to add the book. Please try again later.",
    });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});

    if (books.length === 0) {
      return res.status(200).json({
        success: true,
        date: [],
        message: "No books available in the database.",
      });
    }

    return res.status(200).json({
      success: true,
      data: books,
      message: "All books retrieved successfully.",
    });
  } catch (error) {
    console.error("Error in getAllBook controller:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch books. Please try again later.",
    });
  }
};

const getBookById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid book ID format.",
    });
  }

  try {
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: book,
      message: "Book retrieved successfully",
    });
  } catch (error) {
    console.error("Error in getBookById controller:", error.message);
    return res.status(500).json({
      success: false,
      message:
        "An error occurred while fetching the book. Please try again later.",
    });
  }
};

const deleteBookById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid book ID format.",
    });
  }

  try {
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Book deleted successfully.",
    });
  } catch (error) {
    console.error("Error in deleteBookById controller:", error.message);
    return res.status(500).json({
      success: false,
      message:
        "An error occurred while deleting the book. Please try again later.",
    });
  }
};

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  deleteBookById,
};
