const express = require("express");
const router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config();
const key = 'ed38a68ab3da274d8e598511016db30f';

router.get("/", (req, res) => {
  const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' + '&api_key=' + key;

  const options = {
    method: 'GET'
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(json => {

        // get top 10 popular movies
        let movies = []
        for (let i = 0; i < json.results.length; i++) {
            // JSON Object
            const movie = {
                title: json.results[i].original_title,
                release_date: json.results[i].release_date,
                id: json.results[i].id,
                overview: json.results[i].overview,
                image: "https://image.tmdb.org/t/p/w500" + json.results[i].poster_path ,
            }
            movies.push(movie)
        }
        res.status(200).send(movies)
    })
    .catch(err => console.error('error:' + err));
});

module.exports = router;