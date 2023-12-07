const dotenv = require('dotenv');
dotenv.config();

const mongoose = require("mongoose");
const Book = require("./models/book");

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

const seedData = [
  { title: "Book 1", author: "Author 1", ISBN: "1234567890" },
  { title: "Book 2", author: "Author 2", ISBN: "0987654321" },
  // Add more mock data as needed
];

async function seedDatabase() {
  await Book.deleteMany();
  await Book.insertMany(seedData);
  console.log("Database seeded successfully");
  mongoose.connection.close();
}

seedDatabase();
