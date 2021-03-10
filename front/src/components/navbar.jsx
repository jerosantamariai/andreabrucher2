import React from 'react';
import LogoCampaña from '../img/logocampaña.png';

const Navbar = props => {
    return (
        <nav className="sidenav flex-column">
            <div className="linkgroup text-center">
                <a href="/"><img src={LogoCampaña} alt="logocampaña" className="logocampaña mx-auto" /></a>
                <a className="nav-link" href="#bienvenida">Inicio</a>
                <a className="nav-link" href="#conoceme">Conóceme</a>
                <a className="nav-link" href="#principios">Principios</a>
                <a className="nav-link" href="#programa">Programa</a>
                <a className="nav-link" href="#prensa">Prensa</a>
                <a className="nav-link" href="#enterreno">En Terreno</a>
                <a className="nav-link" href="#RRSS">RRSS</a>
            </div>
        </nav>
    );
}

export default Navbar;