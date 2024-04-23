const mongoose = require('mongoose');
const DatabaseUrl = process.env.DatabaseUrl;

 async function connection() {
   try {
     await mongoose.connect(DatabaseUrl);
     console.log('connected to database successfully');
   } catch (error) {
     console.log("failed to connect",error);
   }
  }

module.exports = {connection};