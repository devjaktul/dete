import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

const offersIcon = faTools;

const BoilerRoom = () => (
    <>
    <h2 className='Page__name'>Wykonawstwo i modernizacja kotłowni</h2>
    <ul className='Offers__list List-style'>
        <li className='Offers__item'>
            <FontAwesomeIcon 
                icon = {offersIcon}
                className='Offers__icon'
            />
            <p className='Offers__text'>
                Wykonawstwo kotłowni
            </p>
        </li>
        <li className='Offers__item'>
            <FontAwesomeIcon 
                icon = {offersIcon}
                className='Offers__icon'
            />
            <p className='Offers__text'>
                Modernizacja kotłowni
            </p>
        </li>
        <li className='Offers__item'>
            <FontAwesomeIcon 
                icon = {offersIcon}
                className='Offers__icon'
            />
            <p className='Offers__text'>
                Instalacja kotłów gazowych
            </p>
        </li>
        <li className='Offers__item'>
            <FontAwesomeIcon 
                icon = {offersIcon}
                className='Offers__icon'
            />
            <p className='Offers__text'>
                Instalacja kotłów węglowych V klasy
            </p>
        </li>
        <li className='Offers__item'>
            <FontAwesomeIcon 
                icon = {offersIcon}
                className='Offers__icon'
            />
            <p className='Offers__text'>
                Montaż wkładów kominowych
            </p>
        </li>
    </ul>
    </>
)

export default BoilerRoom