// this is the advanced route, it will be used to fetch data from the API but with a more advanced query. we will be able to look for a specific movie by their name, genre, or year

const express = require("express");
const router = express.Router();
const fetch = require('node-fetch');

router.get("/", (req, res) => {

    var keyword = req.query.keyword

    const url = "https://api.themoviedb.org/3/search/movie?query=" + keyword;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDM4YTY4YWIzZGEyNzRkOGU1OTg1MTEwMTZkYjMwZiIsInN1YiI6IjY0OTRkOTE2ODgwNTUxMDEwNjM0M2Q5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IlKEVBMUwXpzwCNqmYG0VriHcqmQI6XjLR1Rs3S4Kmc'
        }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => {
        let movie_display = []

        for (let i = 0; i < json.results.length; i++){
            const movie = {
                title: json.results[i].original_title,
                release_date: json.results[i].release_date,
                id: json.results[i].id,
                overview: json.results[i].overview,
                image: "https://image.tmdb.org/t/p/w500" + json.results[i].poster_path ,
            }
            movie_display.push(movie)
        }
        res.status(200).send(movie_display)
    })
    .catch(err => console.error('error:' + err));

});

module.exports = router;