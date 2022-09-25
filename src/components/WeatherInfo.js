import React from 'react';

export default function WeatherInfo(props) {
    return (
        <div className='ml-auto'>
            <div className='flex'>
                <div>
                    <img 
                        className='w-1/2 h-auto mx-auto lg:ml-4'
                        src={props.url}
                        alt={props.altText}
                    />
                </div>
                <div className='ml-auto my-auto pr-4 lg:ml-0 lg:my-auto lg:flex'>
                    <div className='lg:my-auto'>
                        <h1 className='text-[1.4rem] lg:text-[1.6rem] font-medium'>{props.temp}°</h1>
                    </div>
                    <div className='lg:my-auto lg:ml-4'>
                        <h2 className='text-[1rem] hidden lg:flex'>{props.description}</h2>
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex lg:mb-4 lg:mt-2 lg:ml-4'>
                <div>
                    <h2 className='text-[0.9rem] hidden lg:flex'>FeelsLike  {props.feels_like}°</h2>
                </div>
            </div>
        </div>
    );
}
