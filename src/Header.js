import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <img
                className='header__icon'
                src="https://firebasestorage.googleapis.com/v0/b/airbnb-clone-72738.appspot.com/o/airbnb.png?alt=media&token=8a22da3c-ed86-4a1e-be3b-ee9dfeffc56f"
                alt="airbnb"
            />
            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header;
