const express = require("express");
const router = express.Router();
const Book = require("../models/book");

// Endpoint 1: Retrieve All Books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint 2: Add a New Book
router.post("/", async (req, res) => {
  const { title, author, ISBN } = req.body;

  // Validate request payload
  if (!title || !author || !ISBN) {
    return res.status(400).json({ error: "Invalid request payload" });
  }

  try {
    const existingBook = await Book.findOne({ ISBN });
    if (existingBook) {
      return res.status(409).json({ error: "Book already exists" });
    }

    const newBook = new Book({ title, author, ISBN });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint 3: Update Book Details
router.put("/:id", async (req, res) => {
  const { title, author, ISBN } = req.body;

  // Validate request payload
  if (!title || !author || !ISBN) {
    return res.status(400).json({ error: "Invalid request payload" });
  }

  const bookId = req.params.id;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      { title, author, ISBN },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
