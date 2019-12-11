import React from 'react';
import './Header.css';
import Troll from './Trollface.png';

class Header extends React.Component {
    render() {
        return (
            <header>
                <img src={Troll} alt="problem" />
                <p>Meme generator</p>
            </header>
        )
    }
}
export default Header;
