import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faHome, faToolbox } from '@fortawesome/free-solid-svg-icons';


const FooterButton = () => (
    <>
        <li className='Footer__button'>
            <ul className='Button__list List-style'>
                <li className='Button__item'>
                    <Link
                        className='Button__link Link-style'
                        to="/"
                        >
                        <FontAwesomeIcon
                            className='Button__icon'
                            icon = {faHome}
                        />
                    </Link>
                </li>
                <li className='Button__item'>
                    <Link
                        className='Button__link Link-style'
                        to="/offers"
                        >
                        <FontAwesomeIcon
                            className='Button__icon'
                            icon = {faToolbox}
                        />
                    </Link>
                </li>
                <li className='Button__item'>
                    <Link
                        className='Button__link Link-style'
                        to="/contact"
                        >
                        <FontAwesomeIcon
                            className='Button__icon'
                            icon = {faAddressBook}
                        />
                    </Link>
                </li>
            </ul>
        </li>
    </>
)

export default FooterButton