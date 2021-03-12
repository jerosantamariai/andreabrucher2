import React from 'react';
import Gente from '../../img/breaks/gente.png'

const Prensa = props => {
    return (
        <div className="prensa" id="prensa" >
            <div className="row no-gutters">
                <div className="col-12">
                    <h1>PRENSA</h1>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-12">
                    <h1>INFO</h1>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-12">
                    <img src={Gente} alt="Gente" className="break" />
                </div>
            </div>
        </div >
    );
}

export default Prensa;