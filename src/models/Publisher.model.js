import mongoose from 'mongoose';

const publisherSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
});

const publishers = mongoose.model('publishers', publisherSchema);

export default publishers;
