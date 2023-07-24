import React, {useState, useEffect} from 'react';
import './Search.css'
import {FaSearch} from 'react-icons/fa';

export function SearchBar ({onSearch}) {
    
    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(input)
    }

    return (
        <>
            <div className='input-wrapper'>
                <FaSearch id='search-icon'/>
                <form onSubmit={handleSubmit}>
                    <input placeholder = 'Type to Search' value = {input} onChange = {handleInput}/>
                </form>
            </div>

        </>
    )
}

