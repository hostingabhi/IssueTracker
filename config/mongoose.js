const mongoose = require('mongoose');

const url = 'mongodb+srv://abhishekprajapat423:R1pYqxWgTpgN41si@cluster0.0feuhwc.mongodb.net/'

async function mongo() {
        await mongoose.connect(url);
  }
mongo().then(()=>{
    console.log('Connected to mongoDB')
}).catch((error)=>{
    console.log('Unable to connect to mongoDB', error)
})