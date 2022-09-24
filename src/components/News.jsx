import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

export default function News(props) {
    return (
        <div className='inline-block mt-12 mb-8 border-[2px] rounded-xl'>
            <div className='flex m-4'>
                <div className='inline-block w-3/4'>
                    <h2 className='text-[1.3rem] text-[#4e4e4e]'>{props.title}</h2>
                    <h6 className='text-xs font-medium text-[#888]'>{props.source}</h6>
                    <h5 className='hidden lg:flex mx-2 my-3'>{props.desc}</h5>
                    <a className='text-sky-500 font-medium' target='#' href={props.link}>
                        <FontAwesomeIcon icon={faNewspaper} className='text-[#444]' /> View Full Coverage
                    </a>
                </div>
                <img className='h-full my-auto w-1/4 rounded-xl' src={props.image} />
            </div>
        </div>
    );
}
