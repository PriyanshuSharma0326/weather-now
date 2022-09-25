import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar(props) {
    return (
        <div className='mt-8'>
            <input onChange={props.handleChange} className='
            rounded-[4px] 
            w-[18rem] 
            h-12 
            p-4 
            outline-none' 
            placeholder='Search Location' />
            <button onClick={props.handleClick} className='w-12 h-12 ml-3'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white' />
            </button>
        </div>
    );
}