const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
    // filed name : data type of this field
    title: String,
    description: String,
    image: String,
    status: String
  });
  
  module.exports = BooksSchema;
