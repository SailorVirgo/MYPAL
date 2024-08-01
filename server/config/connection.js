const mongoose = require('mongoose');

// Use the environment variable for the connection string, or fallback to localhost for local development
const dbUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/The-Quiet-Ones';

mongoose.connect(dbUri);

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ' + dbUri);
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error: ' + err);
});

module.exports = mongoose.connection;
