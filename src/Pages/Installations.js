import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

// const offersIcon = faTools;
const offersIcon = faTools;

const Installations = () => (
    <>
    <h2 className='Page__name'>Instalacje wod-kan, CO, gas</h2>
    <ul className='Offers__list List-style'>
        <li className='Offers__item'>
            <FontAwesomeIcon 
                icon = {offersIcon}
                className='Offers__icon'
            />
            <p className='Offers__text'>
                Wykonawstwo instalacji centralnego ogrzewania
            </p>
        </li>
        <li className='Offers__item'>
            <FontAwesomeIcon 
                icon = {offersIcon}
                className='Offers__icon'
            />
            <p className='Offers__text'>
                Wykonawstwo wewnętrzych instalacji gazowych
            </p>
        </li>
        <li className='Offers__item'>
            <FontAwesomeIcon 
                icon = {offersIcon}
                className='Offers__icon'
            />
            <p className='Offers__text'>
                Wykonawstwo instalacji wodno-kanalizacyjnych
            </p>
        </li>
        <li className='Offers__item'>
            <FontAwesomeIcon 
                icon = {offersIcon}
                className='Offers__icon'
            />
            <p className='Offers__text'>
                Modernizacja instalacji centralnego ogrzewania
            </p>
        </li>
        <li className='Offers__item'>
            <FontAwesomeIcon 
                icon = {offersIcon}
                className='Offers__icon'
            />
            <p className='Offers__text'>
                Usuwanie awarii instalacji centralnego ogrzewania
            </p>
        </li>
        <li className='Offers__item'>
            <FontAwesomeIcon 
                icon = {offersIcon}
                className='Offers__icon'
            />
            <p className='Offers__text'>
                Usuwanie awarii wewnętrzych instalacji gazowych
            </p>
        </li>
        <li className='Offers__item'>
            <FontAwesomeIcon 
                icon = {offersIcon}
                className='Offers__icon'
            />
            <p className='Offers__text'>
                Usuwanie awarii instalacji wodno-kanalizacyjnych
            </p>
        </li>
        <li className='Offers__item'>
            <FontAwesomeIcon 
                icon = {offersIcon}
                className='Offers__icon'
            />
            <p className='Offers__text'>
                Przeglądy i odbiory instalacji CO, gaz, wod-kan
            </p>
        </li>
    </ul>
    </>
)

export default Installations