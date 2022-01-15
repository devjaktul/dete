import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

const offersIcon = faTools;

const Connections = () => (

    <>
    <h2 className='Page__name'>Przyłącza WOD-KAN</h2>
    <ul className='Offers__list List-style'>
        <li className='Offers__item'>
            <FontAwesomeIcon 
                icon = {offersIcon}
                className='Offers__icon'
            />
            <p className='Offers__text'>
                Wykonawstwo przyłączy wodociągowych
            </p>
        </li>
        <li className='Offers__item'>
            <FontAwesomeIcon 
                icon = {offersIcon}
                className='Offers__icon'
            />
            <p className='Offers__text'>
                Wykonawstwo przyłączy kanalizacyjnych
            </p>
        </li>
    </ul>
    </>
)

export default Connections