import React from 'react';

import FooterButton from './FooterButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';



const Footer = () => (
    <>
        <div className='Footer'>
            <ul className='Footer__list List-style'>
                <li className='Footer__copyright'>
                    <FontAwesomeIcon
                        className='Footer__copyright-icon'
                        icon = {faCopyright}
                    />
                    <p
                        className='Footer__copyright-text'
                    >
                        Zakład usługowy "DETE" Dionizy Turek, All rights reserved
                    </p>
                </li>
                <FooterButton/>
            </ul>
        </div>
    </>
)

export default Footer