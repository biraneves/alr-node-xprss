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

app.get('/', (req, res) => {
    res.status(200).send('Node.js Course');
});

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

export default app;
