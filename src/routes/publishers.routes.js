import express from 'express';

import PublisherController from '../controllers/publishers.controller.js';

const router = express.Router();

router
    .get('/publishers', PublisherController.getPublishers)
    .get('/publishers/:id', PublisherController.getPublisherById)
    .post('/publishers', PublisherController.createPublisher)
    .put('/publishers/:id', PublisherController.updatePublisher)
    .delete('/publishers/:id', PublisherController.deletePublisher);

export default router;
