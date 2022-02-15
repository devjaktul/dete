import React from 'react';
import MobileNav from './Navigation/MobileNav';
// import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import DesktopNav from './Navigation/DesktopNav';


const Header = () => (
    <>
    <div className='Header'>
    
        <h1 className='Header__name'>
            <Link 
                className='Header__link Link-style'
                to="/"
                    >
                    <span className='Header__link--text'>zakład usługowy</span>
                    <span className='Header__link--next-line Link-style'>"dete" dionizy turek</span>
            </Link>
        </h1>
        
        <nav className='Header__navigation'>
            {<MobileNav/>}
            {<DesktopNav/>}
        </nav>
    </div>
    </>
)

export default Header