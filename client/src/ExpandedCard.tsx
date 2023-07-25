import "./Search.css";

function ExpandedCard({movie, onClose}){
    return (
        <div className='movie-card-expanded'>
            <h3>{movie.title}</h3>
            <p>{"Release Date: " + movie.release_date}</p>
            <p>{movie.overview}</p>
            <button onClick={onClose}>CLOSE</button>
        </div>
    )
}

export default ExpandedCard