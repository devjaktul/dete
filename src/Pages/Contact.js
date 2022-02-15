import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope, faMapMarkedAlt  } from '@fortawesome/free-solid-svg-icons';

const items = [
    {
        id: 1,
        icon: faMobileAlt,
        text: "603 740 832",
    },
    {
        id: 2,
        icon: faEnvelope,
        text: "dionizyturek@gmail.com",
    },
    {
        id: 3,
        icon: faMapMarkedAlt,
        text: "ul. Tadeusza Kościuszki 71",
        textNextLine: "42-233 Mykanów",
    },
];

const Item = (props) => 
    <li className='Contact__item'>
        <FontAwesomeIcon
            className='Contact__icon'
            icon = {props.icon}
        />
        <p
            className='Contact__text'
        >
            {props.text}
            <p
            className='Contact__text--next-line'
        >
            {props.textNextLine}
        </p>
        </p>
        
    </li>

const ItemList = items.map(item => <Item key = {item.id} icon = {item.icon} text = {item.text} textNextLine = {item.textNextLine} />)

const Contact = () => (
    <>
    <h2 className='Contact__name'>Kontakt</h2>
    <address className='Contact__page'>
        <ul className='Contact__list List-style'>
            {ItemList}
        </ul>
    </address>
    </>
)

export default Contact