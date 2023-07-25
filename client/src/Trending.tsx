import { useEffect, useState } from "react";
import "./App.css";
import { NavBar } from "./NavBar";
import ExpandedCard from "./ExpandedCard";

function Trending() {
  const [data, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  const handleExpandedCard = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseCard = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <NavBar />
      <h2>Whats Trending</h2>
      <div className="table">
        {data.map((movie) => {
          return (
            <>
              <div
                className="movie-card"
                key={movie.id}
                onClick={() => handleExpandedCard(movie)}
              >
                {movie.title}
                <div>
                  <img
                    src={movie.image}
                    atl="image"
                    className="movie-card-image"
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>

      {selectedMovie && (
        <ExpandedCard movie={selectedMovie} onClose={handleCloseCard} />
      )}
    </>
  );
}

export default Trending;
