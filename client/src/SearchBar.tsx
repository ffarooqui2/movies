import React from 'react';
import './Search.css'
import {FaSearch} from 'react-icons/fa';

export function SearchBar () {
    
    return (
        <>
            <div className='input-wrapper'>
                <FaSearch id='search-icon'/>
                <input placeholder = 'Type to Search'/>
            </div>
        </>
    )
}

