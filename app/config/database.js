const mongoose = require('mongoose');

module.exports = mongoose.createConnection(process.env.MONGODB_URI).asPromise();