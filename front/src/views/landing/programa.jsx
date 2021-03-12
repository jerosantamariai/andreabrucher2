import React from 'react';

const Programa = props => {
    return (
        <div className="programa my-4 ml-4" id="programa" >
            <h1>PROGRAMA</h1>
            {/* <div className="row no-gutters">
                <div className="col-6 offset-3"> */}
            <ol>
                <li><strong>EMPLEO</strong></li>
                <ol type="a">
                    <li>Ser un Puente de comunicacion entre los trabajadores y las empresas que estan invirtiendo en
la comuna.</li>
                    <li>Potenciar el emprendimiento local. Apoyo a las PYMES con capacitacionesen contabilidad,
administracion, tecnologia, control de stock, etc.</li>
                    <li>Crear bolsas de empleo que permitan incentivar el trabajo y contratacion intercomunal.</li>
                </ol>
                <li><strong>SEGURIDAD</strong></li>
                <p>Se debe establecer el estado de derecho a nivel nacional. Debemos potenciar los
planes de seguridad y control contra la delincuencia en nuestra comuna.</p>
                <li><strong>EDUCACIÓN</strong></li>
                <p>Incentivar los planes de ingreso a las Universidades e Institutos con becas entregadas
por la municipalidad. Addemas, revisar la eficiencia del uso d los recursos publicos en los colegios 
subvencionados.</p>
                <li><strong>SALUD</strong></li>
                <p>Destinar recursos publicos para la entrega de servicios de mejor calidad a los habutantes de la comuna
en concreto en convenios con farmacias, ampliar la cobertura de los consultorios, crear nuevos espacios para
la salud mental de nuestros habitantes.</p>
                <li><strong>INFRAESTRUCTURA PÚBLICA</strong></li>
                <ol type="a">
                    <li>Revisar el plan de edificacion de la comuna, con la asesoria de expertos, mejoramiento de las vias publicas.</li>
                    <li>Crear lugares atractivos que se transformen en lugares de encuentro y recreacion de todos nuestros vecinos,
que permitan la vida al aire libre e incentivar el deporte.</li>
                </ol>
            </ol>
            {/* </div>
            </div> */}
        </div >
    );
}

export default Programa;