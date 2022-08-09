'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;


const handleGetBooks = require( './handleGetBooks' );


app.get('/test', (_request, response) => {

  response.send('test request received')

})

app.get( '/books', handleGetBooks );

mongoose.connect('mongodb://127.0.0.1:27017/booksDb');


app.listen(PORT, () => console.log(`listening on ${PORT}`));
