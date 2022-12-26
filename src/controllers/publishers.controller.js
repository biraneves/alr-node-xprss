import publishers from '../models/Publisher.model.js';

class PublisherController {
    static getPublishers = (req, res) => {
        publishers.find((err, publishers) => {
            res.status(200).json(publishers);
        });
    };

    static getPublisherById = (req, res) => {
        const { id } = req.params;

        publishers.findById(id, (err, publisher) => {
            if (err) {
                res.status(400).send({
                    message: `${err.message} - Publisher id not found.`,
                });
            } else {
                res.status(200).send(publisher);
            }
        });
    };

    static createPublisher = (req, res) => {
        const publisher = new publishers(req.body);

        publisher.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - Saving publisher error`,
                });
            } else {
                res.status(201).send(publisher.toJSON());
            }
        });
    };

    static updatePublisher = (req, res) => {
        const { id } = req.params;

        publishers.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - Updating publisher error`,
                });
            } else {
                res.status(200).send({ message: 'The publisher was updated.' });
            }
        });
    };

    static deletePublisher = (req, res) => {
        const { id } = req.params;

        publishers.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - Deleting publisher error`,
                });
            } else {
                res.status(200).send({ message: 'The publisher was deleted.' });
            }
        });
    };
}

export default PublisherController;
