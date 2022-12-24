import books from '../models/Book.model.js';

class BookController {
    static listBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books);
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
}

export default BookController;
