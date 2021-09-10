import './navbar.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { state } from '../../state';
import { Dropdown } from '../DropDown/dropdown';
import { NavbarItemsProps } from '../../types/data';


const NavbarItems: React.FC<NavbarItemsProps> = (props) => {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [id, setId] = useState(0)



    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Link
                to={props.link}
                className='nav-links'
            >
                {props.text} <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown block={props.block} />}
        </li>
    )
}

export { NavbarItems }