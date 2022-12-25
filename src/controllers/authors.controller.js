import authors from '../models/Author.model.js';

class AuthorController {
    static getAuthors = (req, res) => {
        authors.find((err, authors) => {
            res.status(200).json(authors);
        });
    };

    static getAuthorById = (req, res) => {
        const { id } = req.params;

        authors.findById(id, (err, author) => {
            if (err) {
                res.status(400).send({
                    message: `${err.message} - Author id not found.`,
                });
            } else {
                res.status(200).send(author);
            }
        });
    };

    static createAuthor = (req, res) => {
        const author = new authors(req.body);

        author.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - Saving author error`,
                });
            } else {
                res.status(201).send(author.toJSON());
            }
        });
    };

    static updateAuthor = (req, res) => {
        const { id } = req.params;

        authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - Updating author error`,
                });
            } else {
                res.status(200).send({ message: 'The author was updated.' });
            }
        });
    };

    static deleteAuthor = (req, res) => {
        const { id } = req.params;

        authors.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - Deleting author error`,
                });
            } else {
                res.status(200).send({ message: 'The author was deleted.' });
            }
        });
    };
}

export default AuthorController;
