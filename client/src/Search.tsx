import { NavBar } from "./NavBar";
import { SearchBar } from "./SearchBar";
import { useState } from "react";

import "./Search.css";

function Search() {
  const [data, setData] = useState([]);

  const handleSearch = (input: string) => {
    fetch("http://localhost:8080/advanced?keyword=" + input)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <NavBar />
      <h2>Search for Movies</h2>
      <div className="search-bar-container">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="table-row">
        {data.map((movie) => (
          <div className="movie-card" key={movie.id}>
            {movie.title}
            <div>
              <img src={movie.image} alt="image" className="movie-card-image" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Search;
