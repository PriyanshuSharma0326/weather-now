import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar(props) {
    return (
        <div className='mt-8'>
            <input onChange={props.handleChange} className='rounded-[22px] border-[3px] lg:w-[85%] w-[22rem] h-12 p-4 outline-none' placeholder='Search Location' />
            <button onClick={props.handleClick} className='rounded-full w-12 h-12 border-[3px] ml-3'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#444]' />
            </button>
        </div>
    );
}