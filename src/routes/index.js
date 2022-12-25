import express from 'express';

import books from './books.routes.js';
import authors from './authors.routes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ title: 'API Ok.' });
    });

    app.use(express.json(), books, authors);
};

export default routes;
