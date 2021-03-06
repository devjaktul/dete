import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import OffersList from './OffersList';

const NavList = (props) => {

    const [showMenuList, setShowMenuList] = useState(false);

return (
    <>
    <div 
        className= 'Nav-list__bg'
         >
            <ul className='Nav-list__list List-style'>
                <li className='Nav-list__item'>
                    <Link
                        to="/" 
                        className='Nav-list__link Link-style'
                        onClick={props.closeMenu}
                    >
                        Home
                    </Link>
                </li>
                <li className='Nav-list__item--mobile'>
                    <Link
                        to="/offers" 
                        className='Nav-list__link Link-style'
                        onClick={props.closeMenu}
                    >
                        Oferta
                    </Link>
                </li>
                 <li 
                    className= 'Nav-list__item Display-none'
                    onClick={()=> setShowMenuList(!showMenuList)} >Oferta
                        {showMenuList ? <OffersList
                            closeMenuList={()=> {
                            setShowMenuList(false);}
                        }
                    /> : null}    

                    {/* <ul className='Nav-list-offers__list List-style'>
                        <li>
                        <Link
                                to="/installations" 
                                className='Nav-list-offers__item Link-style'
                                onClick={props.closeMenu}
                        >
                                Instalacje
                            </Link> 
                        </li>
                        <li>
                            <Link
                                to="/boilerRoom" 
                                className='Nav-list-offers__item Link-style'
                                onClick={props.closeMenu}
                            >
                                Kot??ownia
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/connections" 
                                className='Nav-list-offers__item Link-style'
                                onClick={props.closeMenu}
                            >
                                Przy????cza WOD-KAN
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/res" 
                                className='Nav-list-offers__item Link-style'
                                onClick={props.closeMenu}
                            >
                                Nowoczesne systemy grzewcze
                            </Link>   
                        </li>
                    </ul> */}
                </li> 
                
                <li className='Nav-list__item'>
                    <Link
                        to="/contact"
                        className='Nav-list__link Link-style'
                        onClick={props.closeMenu}
                    >
                        Kontakt
                    </Link>
                </li>
            </ul>
    </div>
    

    </>
)}



export default NavList
