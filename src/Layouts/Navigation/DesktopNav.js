import React from 'react';
import { Link } from 'react-router-dom';


const DesktopNav = () => {

return (
    <>
            <ul className='Desktop-nav-list__list List-style'>
                <li className='Desktop-nav-list__item'>
                    <Link
                        to="/" 
                        className='Desktop-nav-list__link Link-style'
                    >
                        Home
                    </Link>
                </li>
                <li className='Desktop-nav-list__item'>
                
                
                    <Link
                        to="/offers" 
                        className='Desktop-nav-list__link Link-style'
                    >
                        Oferta
                    </Link>
                </li>
                <li className='Desktop-nav-list__item'>
                    <Link
                        to="/contact"
                        className='Desktop-nav-list__link Link-style'
                    >
                        Kontakt
                    </Link>
                </li>
            </ul>
    </>
)}



export default DesktopNav
