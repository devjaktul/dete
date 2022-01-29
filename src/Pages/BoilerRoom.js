import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

const offersIcon = faTools;

const items = [
    {
        id: 1,
        icon: offersIcon,
        text: "Wykonawstwo kotłowni",
    },
    {
        id: 2,
        icon: offersIcon,
        text: "Modernizacja kotłowni",
    },
    {
        id: 3,
        icon: offersIcon,
        text: "Instalacja kotłów gazowych",
    },
    {
        id: 4,
        icon: offersIcon,
        text: "Instalacja kotłów węglowych V klasy",
    },
    {
        id: 5,
        icon: offersIcon,
        text: "Montaż wkładów kominowych",
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


const BoilerRoom = () => (
    <>
    <h2 className='Page__name'>Wykonawstwo i modernizacja kotłowni</h2>
    <ul className='Offers__list List-style'>
        {ItemList}
    </ul>
    </>
)

export default BoilerRoom