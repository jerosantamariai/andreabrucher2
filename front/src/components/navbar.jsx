import React from 'react';
// import LogoCampaña from '../img/logocampaña.png';
import LogoAB from '../img/logoab.png';

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={LogoAB} alt="logoab" className="logoab" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/#bienvenida">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#conoceme">Conóceme</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#programa">Programa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#enterreno">En Terreno</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#RRSS">Redes Sociales</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // <div className="wrapper">
        //     <nav className="sidenav flex-column" id="sidebar">
        //         <div className="sidebar-header text-center">
        //             <a href="/"><img src={LogoCampaña} alt="logocampaña" className="logocampaña mx-auto" /></a>
        //         </div>
        //         <ul className="lisst-unstyled components linkgroup text-center">
        //             <li>
        //                 <a className="nav-link" href="#bienvenida">Inicio</a>
        //             </li>
        //             <li>
        //                 <a className="nav-link" href="#conoceme">Conóceme</a>
        //             </li>
        //             {/* <li>
        //             <a className="nav-link" href="#principios">Principios</a>
        //             </li> */}
        //             <li>
        //                 <a className="nav-link" href="#programa">Programa</a>
        //             </li>
        //             {/* <li>
        //             <a className="nav-link" href="#prensa">Prensa</a>
        //             </li> */}
        //             <li>
        //                 <a className="nav-link" href="#enterreno">En Terreno</a>
        //             </li>
        //             <li>
        //                 <a className="nav-link" href="#RRSS">Redes Sociales</a>
        //             </li>
        //         </ul>
        //     </nav>
        // <div id="content">
        //     <nav className="navbar navbar-expand-lg">
        //         <div className="container-fluid">
        //             <button className="btn btn-primary" type="button" id="sidebarCollapse">
        //             <i className="fas fa-bars"></i>
        //             {/* <span>  Menú</span> */}
        //             </button>
        //         </div>
        //     </nav>

        // </div>
        // </div>
    );
}

export default Navbar;