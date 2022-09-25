import React from 'react';

export default function WeatherInfo(props) {
    return (
        <div className='flex ml-auto'>
            <div>
                <img 
                    className='w-[50%] h-auto mx-auto'
                    src={props.url}
                    alt={props.altText}
                />
            </div>
            <div className='ml-auto my-auto pr-4'>
                <div>
                    <h1 className='text-[1.4rem] font-bold'>{props.temp}</h1>
                </div>
                <div>
                    <h2 className='text-[1.8rem] hidden'>{props.description}</h2>
                </div>
            </div>
        </div>
    );
}
