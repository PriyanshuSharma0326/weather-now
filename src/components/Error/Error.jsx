import React from 'react';

export default function Error() {
    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className='mt-32'>
            <img 
                src={require('./media/dizzy.png')} 
                className='w-28 h-28 lg:w-48 lg:h-48 mx-auto'
                alt='Error' 
            />
            <h2 className='text-center mt-4 text-white text-[1.2rem] md:text-[2rem] cursor-default'>Oops! There's an error.</h2>
            <div className='flex'>
                <h5 onClick={refreshPage} className='px-4 py-2 bg-white rounded-[4px] mx-auto mt-4 cursor-pointer text-[#2B4865] text-[1rem] font-medium'>Back to Home</h5>
            </div>
        </div>
    );
}
