import React from 'react';

export default function Error() {
    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className='mt-32'>
            <img 
                src={require('./media/dizzy.png')} 
                className='w-20 h-20 md:w-28 md:h-28 lg:w-48 lg:h-48 mx-auto'
                alt='Error' 
            />
            <h2 className='text-center mt-2 md:mt-4 text-white text-[0.8rem] md:text-[1.2rem] lg:text-[2rem] cursor-default'>Oops! There's an error.</h2>
            <div className='flex'>
                <h5 onClick={refreshPage} className='px-2 py-1 md:px-4 md:py-2 bg-white rounded-[4px] mx-auto mt-2 md:mt-4 cursor-pointer text-[#2B4865] text-[0.7rem] md:text-[1rem] font-medium'>Back to Home</h5>
                {/* <FontAwesomeIcon icon={faArrowsRotate} onClick={refreshPage} className='text-white w-10 h-10 mt-4 cursor-pointer' /> */}
            </div>
        </div>
    );
}
