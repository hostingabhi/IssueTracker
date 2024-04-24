const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abhishekprajapat423:R1pYqxWgTpgN41si@cluster0.0feuhwc.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', () => {
  console.log('--> Connected to Database :: MongoDB <--');
});

module.exports = db;
