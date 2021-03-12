import React from 'react';
import Carousel from '../../components/carousel';
import YoMeAtrevo from '../../img/yomeatrevo.jpg'

const Bienvenida = props => {
    return (
        <div className="bienvenida text-center" id="bienvenida">
            {/* <img src={YoMeAtrevo} alt="yomeatrevo" className="yomeatravo" /> */}
            <Carousel />
        </div>
    );
}

export default Bienvenida;