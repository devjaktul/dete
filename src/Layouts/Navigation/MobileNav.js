import React, {useState} from 'react';
import NavList from './NavList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

const MobileNav = () =>{ 
    const [showMenu, setShowMenu] = useState(false);
    const [icons, setIcons] = useState(faBars);
    const [isOpen, setIsOpen] = useState(false);

    
    return (
    <>
        <nav className='Mobile-nav'>  
            <FontAwesomeIcon
                icon = {icons}
                // className='Mobile-nav__button'
                className={isOpen ? 'Mobile-nav__button clouse-icon' : 'Mobile-nav__button' }
                onClick={() => {
                    setShowMenu(!showMenu);
                    setIcons(showMenu ? faBars : faTimes);
                    setIsOpen(!isOpen);
                }}
            />

                {showMenu ? <NavList
                    closeMenu={()=> {
                        setShowMenu(false);
                        setIcons(showMenu ? faBars : faTimes);
                        setIsOpen(false);
                }} /> : null}
        </nav>
    </>
   
)
    
    }
 
export default MobileNav;