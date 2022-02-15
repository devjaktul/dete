import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';


const FooterDesktopButtons = () => (
    <>
            <li className='Footer__button'>
                <Link
                    className='Button__link'
                    to="/contact"
                    >
                    <FontAwesomeIcon
                        className='Button__icon'
                        icon = {faAddressBook}
                    />
                </Link>
            </li>
    </>
)

export default FooterDesktopButtons