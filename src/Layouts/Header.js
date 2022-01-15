import React from 'react';
import MobileNav from './Navigation/MobileNav';
// import Navigation from './Navigation';


const Header = () => (
    <>
    <h1 className='Header__name'>zakład usługowy "dete" dionizy turek</h1>
    <nav className='Header__navigation'>
    {<MobileNav/>}
    </nav>
    </>
)

export default Header