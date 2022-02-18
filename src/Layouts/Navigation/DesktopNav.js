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
                        {/* <ul className='Desktop-nav-list-offers__list List-style'>
                            <li className='Desktop-nav-list-offers__item'>
                            <Link
                                    to="/installations" 
                                    className='Desktop-nav-list-offers__link Link-style'
                            >
                                    Instalacje
                                </Link> 
                            </li>
                            <li className='Desktop-nav-list-offers__item'>
                                <Link
                                    to="/boilerRoom" 
                                    className='Desktop-nav-list-offers__link Link-style'
                                >
                                    Kotłownia
                                </Link>
                            </li>
                            <li className='Desktop-nav-list-offers__item'>
                                <Link
                                    to="/connections" 
                                    className='Desktop-nav-list-offers__link Link-style'
                                >
                                    Przyłącza WOD-KAN
                                </Link>
                            </li>
                            <li className='Desktop-nav-list-offers__item'>
                                <Link
                                    to="/res" 
                                    className='Desktop-nav-list-offers__link Link-style'
                                >
                                    Nowoczesne systemy grzewcze
                                </Link>   
                            </li>
                        </ul> */}
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
