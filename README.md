# Library Management System API

This is a simple RESTful API for managing a library system using Express and MongoDB.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone this repository:
  - git clone repo
  - cd library-api

2. Install dependencies:
   - npm install

### Seeding the Database

To populate the database with mock data, run the following command:
  - node seed.js

### Running the Application

Start the Express server:
  - npm run dev ( nodemon app.js)
  - npm start ( node app.js ) 

The server will be running at http://localhost:3000 (or a different port if specified).

### API Endpoints

1. Retrieve All Books
  - Method: GET
  - URL: /api/books
  - Response Format: JSON array of books
  - Error Handling: 500 Internal Server Error if there's an issue with the database connection

2. Add a New Book
  - Method: POST
  - URL: /api/books
  - Request Body: JSON object representing the new book
  - {
    "title": "Book Title",
    "author": "Author Name",
    "ISBN": "1234567890"
  }
  - Response Format: JSON object of the newly added book
  - Error Handling:
  - 400 Bad Request if the request payload is invalid
  - 409 Conflict if the book with the same ISBN already exists
  - 500 Internal Server Error for other issues

3. Update Book Details
  - Method: PUT
  - URL: /api/books/{id}
  - Request Body: JSON object with updated book details
  - {
    "title": "Updated Title",
    "author": "Updated Author",
    "ISBN": "0987654321"
  }
  - Response Format: JSON object of the updated book
  - Error Handling:
  - 400 Bad Request if the request payload is invalid
  - 404 Not Found if the book with the given ID is not found
  - 500 Internal Server Error for other issues

### API Documentation
For detailed API documentation, refer to the API Endpoints section above.

Feel free to explore and test the API using tools like Postman or curl. If you encounter any issues, please refer to the error handling information provided for each endpoint.




