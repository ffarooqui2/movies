import {NavBar} from './NavBar'
import {SearchBar} from './SearchBar'
import {useState} from 'react'

import './Search.css'

function Search() {
    return (
        <>
            <NavBar />
            <h2>Search for Movies</h2>
            <div className='search-bar-container'>
                <SearchBar />
                {/* <SearchResults/> */}
            </div>
            
        </>
    )
}

export default Search