import React from 'react';
import LogoCampaña from '../img/logocampaña.png';

const Navbar = props => {
    return (
        <nav className="sidenav flex-column">
            <div className="linkgroup text-center">
                <a href="/"><img src={LogoCampaña} alt="logocampaña" className="logocampaña mx-auto" /></a>
                <a className="nav-link" href="#inicio">Inicio</a>
                <a className="nav-link" href="#seccion2">Sección 2</a>
                <a className="nav-link" href="#seccion3">Sección 3</a>
                <a className="nav-link" href="#seccion4">Sección 4</a>
                <a className="nav-link" href="#seccion5">Sección 5</a>
                <a className="nav-link" href="#seccion6">Sección 6</a>
            </div>
        </nav>
    );
}

export default Navbar;