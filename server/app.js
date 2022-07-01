const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));

let movieData = [];
// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter
app.get('/', (req,res) => {

    let {i,t} = req.query
    let search = i || t

for(let i = 0; i < movieData.length; i++){
    if(movieData[i] == search){
        console.log('leggoo')
    }
    }
    console.log('movies',movieData)
     axios
        .get(`http://www.omdbapi.com${req.url}&apikey=${process.env.API_KEY}`)
        .then(function (response){
            let data = response.data;
    console.log('its working')
        movieData.push(data.Title, data.Year, data.imdbID)
         res.send(data.Title, data.Year, data.imdbID)
       })
       .catch(error =>{
        console.log(error)
       })
}

)
module.exports = app;