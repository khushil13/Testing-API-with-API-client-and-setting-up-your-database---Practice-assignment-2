const express = require('express');
const router = express.Router();

let books = []; // Store books in memory

// ✅ CREATE: Add a new book
router.post('/', (req, res) => {
    const { book_id, title, author, genre, year, copies } = req.body;

    if (!book_id || !title || !author || !genre || !year || !copies) {
        return res.status(400).json({ error: "All fields are required." });
    }

    const newBook = { book_id, title, author, genre, year, copies };
    books.push(newBook);

    res.status(201).json(newBook);
});

// ✅ READ: Get all books
router.get('/', (req, res) => {
    res.json(books);
});

// ✅ READ: Get a book by ID
router.get('/:id', (req, res) => {
    const book = books.find(b => b.book_id === req.params.id);
    if (!book) {
        return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
});

// ✅ UPDATE: Update book details
router.put('/:id', (req, res) => {
    const book = books.find(b => b.book_id === req.params.id);
    if (!book) {
        return res.status(404).json({ error: "Book not found" });
    }

    const { title, author, genre, year, copies } = req.body;
    if (title) book.title = title;
    if (author) book.author = author;
    if (genre) book.genre = genre;
    if (year) book.year = year;
    if (copies) book.copies = copies;

    res.json(book);
});

// ✅ DELETE: Remove a book by ID
router.delete('/:id', (req, res) => {
    const index = books.findIndex(b => b.book_id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ error: "Book not found" });
    }

    books.splice(index, 1);
    res.json({ message: "Book deleted successfully" });
});

module.exports = router;
