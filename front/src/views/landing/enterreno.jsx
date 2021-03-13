import React, { useState } from 'react';
import FotosTerreno from '../../components/fotosterreno';

const EnTerreno = props => {
    const [multiplicador, setMultiplicador] = useState(1)
    function mapterreno() {
        let x = 4 * multiplicador;
        let y = [];
        for (let i = 0; i < x; i++) {
            if (FotosTerreno[i] !== undefined)
                y.push(<img src={FotosTerreno[i]} id="enterrenoimg" />)

        }
        return y;
    }
    return (
        <div className="enterreno my-0 ml-4" id="enterreno" >
            <h1>EN TERRENO</h1>
            <div className="row text-center no-gutters">
                <div className="col my-3">
                    {
                        mapterreno()
                    }
                </div>
            </div>

            <div className="row d-flex justify-content-center no-gutters">
                {
                    FotosTerreno.length > 3 * multiplicador ? (
                        <div className="row no-gutters">
                            <div className="col text-center">
                                <div className="btn btn-info mb-4" onClick={() => setMultiplicador(multiplicador + 1)}>Ver más...</div>
                            </div>
                        </div>
                    ) :
                        null
                }
            </div>
        </div >
    );
}

export default EnTerreno;