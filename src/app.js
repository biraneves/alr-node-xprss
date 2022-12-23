import express from 'express';

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

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
    res.status(200).send('Node.js Course');
});

app.get('/books', (_req, res) => {
    res.status(200).json(books);
});

app.post('/books', (req, res) => {
    const book = req.body;

    books.push(book);
    res.status(201).send('Book created with success!');
});

export default app;
