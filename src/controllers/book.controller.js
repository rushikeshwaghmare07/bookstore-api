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

module.exports = {
  addBook,
};
