const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

// Middleware
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
    res.send('Library API Backend')
})

// Routes
const booksRouter = require("./routes/books");
app.use("/api/books", booksRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
