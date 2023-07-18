import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/movies')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.error(err))
  }, [])

  return (
    <>
      <h1>Whats Trending</h1>
      <div className = "table">
      {
        data.map(movie => {
          return (
            <>
            <div className = 'movie-card' key ={movie.id}>
              {movie.title}
              <div>
                <img src = {movie.image} atl ="image" className = "movie-card-image"/>
              </div>
            </div>
            </>
          )
        })
      }
      </div>
    </>
  )
}

export default App
