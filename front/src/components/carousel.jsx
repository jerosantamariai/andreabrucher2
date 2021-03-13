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
                <div className="carousel-item active" data-bs-interval="2000">
                    <img src={RecuperemosChile} className=" carouselimg d-block" alt="RecuperemosChile" />
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                    <img src={MejorEducacion} className="carouselimg d-block" alt="MejorEducacion" />
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                    <img src={MasSeguridad} className="carouselimg d-block" alt="MasSeguridad" />
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                    <img src={MejorSalud} className="carouselimg d-block" alt="MejorSalud" />
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                    <img src={MejorMovilizacion} className="carouselimg d-block" alt="MejorMovilizacion" />
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                    <img src={MasAreasVerdes} className="carouselimg d-block" alt="MasAreasVerdes" />
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