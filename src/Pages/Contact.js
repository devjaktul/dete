import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope, faMapMarkedAlt  } from '@fortawesome/free-solid-svg-icons';

const Contact = () => (
    <>
    <h2 className='Page__name'>Kontakt</h2>
    <address className='Contact__page'>
        <ul className='Contact__list List-style'>
            <li className='Contact__item'>
            <FontAwesomeIcon 
                icon = {faMobileAlt}
                className='Contact__icon'
            />
                <p className='Contact__text'>
                    603 740 832
                </p>
            </li>
            <li className='Contact__item'>
                <FontAwesomeIcon 
                    icon = {faEnvelope}
                    className='Contact__icon'
                />
                <p className='Contact__text'>
                    dionizyturek@gmail.com
                </p>
            </li>
            <li className='Contact__item'>
                <FontAwesomeIcon 
                    icon = {faMapMarkedAlt}
                    className='Contact__icon'
                />
                <p className='Contact__text'>   
                    ul. Tadeusza Kościuszki 71 42-233 Mykanów
                </p>
            </li>
        </ul>
    </address>
    </>
)

export default Contact