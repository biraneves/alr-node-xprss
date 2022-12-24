import mongoose from 'mongoose';

const connectionString = 'mongodb://127.0.01:55000/alr_node_xprss';

mongoose.set('strictQuery', true);
mongoose.connect(connectionString);
const db = mongoose.connection;

export default db;
