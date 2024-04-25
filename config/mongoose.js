const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abhishekprajapat423:5PzLl3qqAYKFiDjQ@issutracker.of0ogs7.mongodb.net/issuetracker', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', () => {
  console.log('--> Connected to Database :: MongoDB <--');
});

module.exports = db;
