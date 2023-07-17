const express = require('express');
const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());

// Routes
const movieRoute = require('./routes/movies');
app.use('/movies', movieRoute);

const searchMovieRoute = require('./routes/advanced');
app.use('/advanced', searchMovieRoute);

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)