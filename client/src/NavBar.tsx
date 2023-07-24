import './App.css'
import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <>
        <nav className = 'nav-bar'>
            <ul>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/trending">Trending</Link></li>
            </ul>
            <h1><Link to="/">MOVIE MONOSPACE</Link></h1>
        </nav>
        </>
    )
}