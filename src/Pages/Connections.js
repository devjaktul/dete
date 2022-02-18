import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

const offersIcon = faTools;

const items = [
    {
        id: 1,
        icon: offersIcon,
        text: "Wykonawstwo przyłączy wodociągowych",
    },
    {
        id: 2,
        icon: offersIcon,
        text: "Wykonawstwo przyłączy kanalizacyjnych",
    },
];

const Item = (props) => 
    <li className='Offers__item'>
        <FontAwesomeIcon
            className='Offers__icon'
            icon = {props.icon}
        />
        <p
            className='Offers__text'
        >
            {props.text}
        </p>
    </li>

const ItemList = items.map(item => <Item key = {item.id} icon = {item.icon} text = {item.text} />)

const Connections = () => (

    <>
    <div className='Page__container'>
    <h2 className='Page__name'>Przyłącza wod-kan</h2>
    <ul className='Offers__list List-style'>
        {ItemList}
    </ul>
    </div>
    </>
)

export default Connections