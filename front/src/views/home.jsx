import React from 'react';
import Bienvenida from './landing/bienvenida';
import Conoceme from './landing/conoceme';
// import Principios from './landing/principios';
import Programa from './landing/programa';
// import Prensa from './landing/prensa';
import EnTerreno from './landing/enterreno';
import RRSS from './landing/rrss';

const Home = props => {
    return(
        <div className="home">
            <Bienvenida />
            <Conoceme />
            {/* <Principios /> */}
            <Programa />
            {/* <Prensa /> */}
            <EnTerreno />
            <RRSS />
        </div>
    );
}

export default Home;