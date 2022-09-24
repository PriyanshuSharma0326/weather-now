import React from 'react';

export default function WeatherInfo(props) {
    return (
        <div className='flex pb-6'>
            <div className='w-1/2'>
                <img 
                    className='lg:max-w-full lg:max-h-full mx-auto mt-4'
                    src={props.url}
                    alt={props.altText}
                />
            </div>
            <div className='text-center items-center justify-center inline-block lg:m-0'>
                <div>
                    <h1 className='text-[3.5rem]'>{props.temp}</h1>
                </div>
                <div>
                    <h2 className='text-[1.8rem] opacity-70'>{props.description}</h2>
                </div>
            </div>
        </div>
    );
}
