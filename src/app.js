import express from 'express';
import db from './config/dbConnect.js';

const books = [
    {
        id: 1,
        title: 'Lord of the rings, The',
    },
    {
        id: 2,
        title: 'Hobbit, The',
    },
];

const searchBook = (id) => {
    return books.findIndex((book) => book.id == id);
};

db.on('error', console.log.bind(console, 'Connection error'));
db.once('open', () => console.log('DB connection ok'));

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
    res.status(200).send('Node.js Course');
});

app.get('/books', (_req, res) => {
    res.status(200).json(books);
});

app.get('/books/:id', (req, res) => {
    res.status(200).json(books[searchBook(req.params.id)]);
});

app.post('/books', (req, res) => {
    const book = req.body;

    books.push(book);
    res.status(201).send('Book created with success!');
});

app.put('/books/:id', (req, res) => {
    const index = searchBook(req.params.id);

    books[index].title = req.body.title;
    res.status(200).json(books);
});

app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    const index = searchBook(id);

    books.splice(index, 1);
    res.status(200).send(`Book ${id} deleted.`);
});

export default app;
