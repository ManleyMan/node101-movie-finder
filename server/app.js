const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));

let movieData = [];

// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter
app.get('/', (req,res) => {
    console.log('its working')
})
module.exports = app;