import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';


const FooterButton = () => (
    <>
            <li className='Footer__button'>
                <Link
                to="/contact"
                >
                <FontAwesomeIcon
                    className='Footer__button-icon'
                    icon = {faAddressBook}
                />
                </Link>
            </li>
    </>
)

export default FooterButton