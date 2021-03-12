import React from 'react';
import NuevaConcejal from '../../img/breaks/nuevaconcejal.png';

const Principios = prop => {
    return (
        <div className="principios" id="principios">
            <div className="row no-gutters">
                <div className="col-12">
                    <h1>PRINCIPIOS</h1>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-12">
                    <h1>INFO</h1>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-12">
                    <img src={NuevaConcejal} alt="NuevaConcejal" class="break" />
                </div>
            </div>
        </div>
    );
}

export default Principios;