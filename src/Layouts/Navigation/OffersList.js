import React from 'react';
import { Link } from 'react-router-dom';

const OffersList = (props) => {
    return ( 
        <>
        <ul className='Nav-list-offers__list List-style'>
                <li className='Nav-list-offers__item'>
                   <Link
                        to="/installations" 
                        className='Nav-list-offers__link Link-style'
                        onClick={props.closeMenu}
                   >
                        Instalacje
                    </Link> 
                </li>
                <li className='Nav-list-offers__item'>
                    <Link
                        to="/boilerRoom" 
                        className='Nav-list-offers__link Link-style'
                        onClick={props.closeMenu}
                    >
                        Kotłownia
                    </Link>
                </li>
                <li className='Nav-list-offers__item'>
                    <Link
                        to="/connections" 
                        className='Nav-list-offers__link Link-style'
                        onClick={props.closeMenu}
                    >
                        Przyłącza WOD-KAN
                    </Link>
                </li>
                <li>
                    <Link
                        to="/res" 
                        className='Nav-list-offers__link Link-style Nav-lh'
                        onClick={props.closeMenu}
                    >
                        Nowoczesne systemy grzewcze
                    </Link>   
                </li>
            </ul>
        </>
     );
}
 
export default OffersList;