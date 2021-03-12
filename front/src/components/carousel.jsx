import React from 'react';
import RecuperemosChile from '../img/carousel/recuperemoschile.png';
import MejorEducacion from '../img/carousel/mejoreducacion.png';
import MasSeguridad from '../img/carousel/masseguridad.png';
import MejorSalud from '../img/carousel/mejorsalud.png';
import MejorMovilizacion from '../img/carousel/mejormovilizacion.png';
import MasAreasVerdes from '../img/carousel/masareasverdes.png';

const Carousel = props => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={RecuperemosChile} className="d-block w-100" alt="RecuperemosChile" />
                </div>
                <div className="carousel-item">
                    <img src={MejorEducacion} className="d-block w-100" alt="MejorEducacion" />
                </div>
                <div className="carousel-item">
                    <img src={MasSeguridad} className="d-block w-100" alt="MasSeguridad" />
                </div>
                <div className="carousel-item">
                    <img src={MejorSalud} className="d-block w-100" alt="MejorSalud" />
                </div>
                <div className="carousel-item">
                    <img src={MejorMovilizacion} className="d-block w-100" alt="MejorMovilizacion" />
                </div>
                <div className="carousel-item">
                    <img src={MasAreasVerdes} className="d-block w-100" alt="MasAreasVerdes" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;