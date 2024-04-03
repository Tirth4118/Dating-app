const mongoose = require('mongoose');

// %%% CONNECTS TO MONGODB AND LOGS THE RESULT %%%

async function testDbConnection() {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log('Connected to MongoDB'.bgCyan.bold);
  } catch (error) {
    console.log(`Error connecting to db ${error.message}`.bgRed.bold);
    if (error.code === 'ECONNREFUSED') {
      console.log('is server running?'.yellow);
    }
  }
}

module.exports = testDbConnection;
