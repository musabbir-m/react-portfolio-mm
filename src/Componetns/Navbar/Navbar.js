import React from 'react';

const Navbar = () => {
    return (
        <div className='h-20 px-3 mx-auto bg-gray-100 flex gap-3 justify-between items-center '>
            <p>Md Musabbir</p>
            <div className='flex gap-3'>
            <p>Contact</p>
            <p>Resume</p>
            <p>Linkedin</p>
            <p>GitHub</p>
            </div>
        </div>
    )
};

export default Navbar;