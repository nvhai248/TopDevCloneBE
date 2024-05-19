const mongoose = require('mongoose');

async function connectMongo() {
  try {
    await mongoose.connect(`mongodb://192.168.1.7:60000/jobservice`);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = { connectMongo };
