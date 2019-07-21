import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/logo.png';
import { useGlobal } from 'reactn';

const Header = () => {
    const [value] = useGlobal('user');

    return (
        <header id="nav-wrapper">
            <nav>
                <NavLink to="/">
                    <img src={logo} alt="Logo" />
                </NavLink>
                <div className="spacer"></div>
                <ul>
                    <li><NavLink to="/" exact activeClassName="active">Listings</NavLink></li>
                    {
                        value && value.account_type >= 1 ? <li><NavLink to="/new" activeClassName="active">New</NavLink></li> : ''
                    }
                    {
                        value ? <li><NavLink to="/logout" className="nav-link">Log Out</NavLink></li> : <li><NavLink to="/login" className="nav-link">Log In</NavLink></li>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;