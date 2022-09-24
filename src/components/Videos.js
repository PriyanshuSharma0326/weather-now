import React from 'react'

export default function Videos() {
    return (
        <div className='lg:w-1/2 lg:h-[300px] lg:ml-auto sm:py-6'>
            <iframe
                title='YouTube Video'
                className='max-w-[450px] lg:w-[95%] w-full sm:ml-auto'
                height={250}
                src="https://www.youtube.com/embed/F-POY4Q0QSI?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
            />
        </div>
    );
}
