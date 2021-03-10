import React from 'react';
import Section2 from './landing/section2';
import Section3 from './landing/section3';
import Inicio from './landing/inicio';
import Section4 from './landing/section4';
import Section5 from './landing/section5';
import Section6 from './landing/section6';

const Home = props => {
    return(
        <div className="home">
            <Inicio />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </div>
    );
}

export default Home;