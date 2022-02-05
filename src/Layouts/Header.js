import React from 'react';
import MobileNav from './Navigation/MobileNav';
// import Navigation from './Navigation';


const Header = () => (
    <>
    <div className='Header'>
        <h1 className='Header__name'>
            <span className='Header__name--text'>zakład usługowy</span>
            <span className='Header__name--next-line'>"dete" dionizy turek</span>
        </h1>
        <nav className='Header__navigation'>
            {<MobileNav/>}
        </nav>
    </div>
    </>
)

export default Header