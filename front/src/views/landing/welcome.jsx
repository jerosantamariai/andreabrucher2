import React from 'react';
import YoMeAtrevo from '../../img/yomeatrevo.jpg'

const Welcome = props => {
    return (
        <div className="welcome text-center">
            <img src={YoMeAtrevo} alt="yomeatrevo" className="yomeatravo" />
        </div>
    );
}

export default Welcome;