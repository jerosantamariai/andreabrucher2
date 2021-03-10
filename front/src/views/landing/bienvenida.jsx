import React from 'react';
import YoMeAtrevo from '../../img/yomeatrevo.jpg'

const Bienvenida = props => {
    return (
        <div className="bienvenida text-center" id="bienvenida">
            <img src={YoMeAtrevo} alt="yomeatrevo" className="yomeatravo" />
        </div>
    );
}

export default Bienvenida;