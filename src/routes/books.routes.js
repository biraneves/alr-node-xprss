import express from 'express';

import BookController from '../controllers/books.controller.js';

const router = express.Router();

router
    .get('/books', BookController.getBooks)
    .get('/books/search', BookController.getBooksByPublisher)
    .get('/books/:id', BookController.getBookById)
    .post('/books', BookController.createBook)
    .put('/books/:id', BookController.updateBook)
    .delete('/books/:id', BookController.deleteBook);

export default router;
