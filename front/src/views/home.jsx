import React from 'react';
import Section2 from './landing/section2';
import Section3 from './landing/section3';
import Welcome from './landing/welcome';

const Home = props => {
    return(
        <div className="home">
            <Welcome />
            <Section2 />
            <Section3 />
        </div>
    );
}

export default Home;