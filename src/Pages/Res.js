import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

const offersIcon = faTools;

const Res = () => (
    <>
    <h2 className='Page__name'>Nowoczesne systemy grzewcze</h2>
    <ul className='Offers__list List-style'>
        <li className='Offers__item'>
            <FontAwesomeIcon 
                icon = {offersIcon}
                className='Offers__icon'
            />
            <p className='Offers__text'>
                Instalacje solarne
            </p>
        </li>
        <li className='Offers__item'>
            <FontAwesomeIcon 
                icon = {offersIcon}
                className='Offers__icon'
            />
            <p className='Offers__text'>
                Montaż pomp ciepła
            </p>
        </li>
        <li className='Offers__item'>
            <FontAwesomeIcon 
                icon = {offersIcon}
                className='Offers__icon'
            />
            <p className='Offers__text'>
                Montaż systemów rekuperacji
            </p>
        </li>
    </ul>
    </>
)

export default Res