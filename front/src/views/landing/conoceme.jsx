import React from 'react';
import FreeAndrea from '../../img/freeandrea.jpeg';

const Conoceme = prop => {
    return (
        <div className="conoceme no-gutters" id="conoceme">
            <div className="row no-gutters pt-5 ml-5">
                <div className="col-12">
                    <h1>CONÓCEME</h1>
                </div>
            </div>
            <div className="conocemecontainer pt-5 d-flex">
                <div className="row no-gutters mx-5 text-justify">
                    <div className="col-12 col-sm-7">
                        <p>Me considero una colaboradora importante de Cristóbal Lira, que cuenta con un proyecto concreto y
real para el desarrollo de la comuna.</p>
                        <p>Soy Andrea Brucher, tengo 46 años, Ingeniera Comercial con mención en Administracion de Empresas,
                        casada hace 22 años y soy mamá de 3 niñitas. Soy republicana y hoy candidata a concejal por la
comuna de Lo Barnechea. Patriota, y para mi, Chile y su gente esta primero.</p>
                        <p>Me interesa que me conozcan como una mujer de derecha, verdadera, valiente, resolutiva, sincera
y espontánea.</p>
                        <p>Vivo hace 10 años en la comuna. Me motiva trabajar en base a la unidad y la transparencia,
                        por las necesidades y mejoras, para hacer de Lo Barnechea una comuna de excelencia para que todas
                        las personas tengan oportunidad de estudiar y emprender, donde se respete el estado de derecho y
la seguridad sea el eje principal para todos los ciudadanos.</p>
                        <p>Estoy abierta al dialogo y me pueden contactar a través de mis redes, donde pondré los principios
                        que me identifican y las propuestas que les traigo para lograr ser tu candidata a concejal en
estas elecciones del 11 de abril de 2021.</p>
                    </div>
                    <div className="col-xs-12 col-md-5 text-center my-auto pt-3">
                        <img src={FreeAndrea} alt="freeandrea" className="freeandrea" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Conoceme;