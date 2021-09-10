import './navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Svg/logo.svg';
import { Dropdown } from '../DropDown/dropdown';
import { state } from '../../state';
import { NavbarItems } from './navbarItems';



const Navbar: React.FC = () => {


    let NavbarElementBlock: any = [
        state.NavbarElement.About,
        state.NavbarElement.News,
        state.NavbarElement.Shop,
        state.NavbarElement.Entertainment,
        state.NavbarElement.Food,
        state.NavbarElement.Services
    ]

    return (
        <nav className='navbar_container'>
            <nav className="navbar">
                <Link to='/' className='navbar-logo'>
                    DreamTown
                    <i className="fab fa-buffer" />
                </Link>
                <ul className={'nav-menu'}>
                    {state.NavbarBlock.map((item, index) =>
                        <NavbarItems text={item.text} link={item.link} block={NavbarElementBlock[index]} />
                    )}
                </ul>
            </nav>
        </nav>
    )
}

export { Navbar }