import React, {useState} from 'react';
import NavList from './NavList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

const MobileNav = () =>{ 
    const [showMenu, setShowMenu] = useState(false);
    const [icons, setIcons] = useState(faBars);

    
    return (
    <>
    <nav className='Mobile-nav'>
<FontAwesomeIcon
    icon = {icons}
    className='Mobile-nav__button'
    onClick={() => {
        setShowMenu(!showMenu);
        setIcons(showMenu ? faBars : faTimes);
    }}
/>

    {showMenu ? <NavList
        closeMenu={()=> {
            setShowMenu(false);
            setIcons(showMenu ? faBars : faTimes);
    }} /> : null}
    </nav>
    </>
   
)
    
    }
 
export default MobileNav;