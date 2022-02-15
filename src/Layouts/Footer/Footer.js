import React from 'react';

import FooterButton from './FooterButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';


const Footer = () => (
    <>
        <div className='Footer'>
            <ul className='Footer__list List-style'>
                <li className='Footer__copyright List-style'>
                    <FontAwesomeIcon
                        className='Copyright__icon'
                        icon = {faCopyright}
                    />
                    <p
                        className='Copyright__text'
                    >
                        Zakład usługowy "DETE" Dionizy Turek,
                        <p className='Copyright__text--next-line'
                        >
                            All rights reserved
                        </p>
                    </p>
                </li>
                <FooterButton/>
            </ul>
        </div>
    </>
)

export default Footer