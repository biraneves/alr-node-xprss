import books from '../models/Book.model.js';

class BookController {
    static getBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books);
        });
    };

    static getBookById = (req, res) => {
        const { id } = req.params;

        books.findById(id, (err, book) => {
            if (err) {
                res.status(400).send({
                    message: `${err.message} - Book id not found.`,
                });
            } else {
                res.status(200).send(book);
            }
        });
    };

    static createBook = (req, res) => {
        const book = new books(req.body);

        book.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - Saving book error`,
                });
            } else {
                res.status(201).send(book.toJSON());
            }
        });
    };

    static updateBook = (req, res) => {
        const { id } = req.params;

        books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - Updating book error`,
                });
            } else {
                res.status(200).send({ message: 'The book was updated.' });
            }
        });
    };

    static deleteBook = (req, res) => {
        const { id } = req.params;

        books.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - Deleting book error`,
                });
            } else {
                res.status(200).send({ message: 'The book was deleted.' });
            }
        });
    };
}

export default BookController;
