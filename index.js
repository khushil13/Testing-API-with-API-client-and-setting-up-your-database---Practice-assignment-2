const express = require('express');
const app = express();
const booksRoutes = require('./routes/server'); // Import routes

app.use(express.json()); // Middleware to parse JSON

app.use('/books', booksRoutes); // Use routes for books

// ✅ Default route to check if the server is running
app.get('/', (req, res) => {
    res.send('Library Management API is running!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
