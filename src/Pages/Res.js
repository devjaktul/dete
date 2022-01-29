import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';


const offersIcon = faTools;


    const items = [
        {
            id: 1,
            icon: offersIcon,
            text: "Instalacje solarne",
        },
        {
            id: 2,
            icon: offersIcon,
            text: "Montaż pomp ciepła",
        },
        {
            id: 3,
            icon: offersIcon,
            text: "Montaż systemów rekuperacji",
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

const Res = () => (

    <>
    <h2 className='Page__name'>Nowoczesne systemy grzewcze</h2>
    <ul className='Offers__list List-style'>
    {ItemList}   
    </ul>
    </>
)

export default Res