import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

// const offersIcon = faTools;
const offersIcon = faTools;


const items = [
    {
        id: 1,
        icon: offersIcon,
        text: "Wykonawstwo instalacji centralnego ogrzewania",
    },
    {
        id: 2,
        icon: offersIcon,
        text: "Wykonawstwo wewnętrzych instalacji gazowych",
    },
    {
        id: 3,
        icon: offersIcon,
        text: "Wykonawstwo instalacji wodno-kanalizacyjnych",
    },
    {
        id: 4,
        icon: offersIcon,
        text: "Modernizacja instalacji centralnego ogrzewania",
    },
    {
        id: 5,
        icon: offersIcon,
        text: "Usuwanie awarii instalacji centralnego ogrzewania",
    },
    {
        id: 6,
        icon: offersIcon,
        text: "Usuwanie awarii wewnętrzych instalacji gazowych",
    },
    {
        id: 7,
        icon: offersIcon,
        text: "Usuwanie awarii instalacji wodno-kanalizacyjnych",
    },
    {
        id: 8,
        icon: offersIcon,
        text: "Przeglądy i odbiory instalacji CO, gaz, wod-kan",
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

const Installations = () => (
    <>
    <h2 className='Page__name'>Instalacje wod-kan, CO, gas</h2>
    <ul className='Offers__list List-style'>
        {ItemList}
    </ul>
    </>
)

export default Installations