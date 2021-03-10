import React from 'react';
import LogoCampaña from '../img/logocampaña.png';

const Navbar = props => {
    return (
        <nav className="sidenav flex-column">
            <div className="linkgroup">
                <img src={LogoCampaña} alt="logocampaña" className="logocampaña" />
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
            </div>
        </nav>
    );
}

export default Navbar;