import React from 'react';
import YoMeAtrevo from '../../img/breaks/yomeatrevo.png';


const RRSS = props => {
    return (
        <div className="RRSS no-gutters my-4 ml-4" id="RRSS" >
            <h1>REDES SOCIALES</h1>
            <div className="row rowsocial text-center pt-5 no-gutters">
                <div className="col-xs-12 col-md-6 twitter">
                    <a className="twitter-timeline" data-width="300" data-height="500" data-theme="dark" href="https://twitter.com/andreabrucher?ref_src=twsrc%5Etfw">Tweets by andreabrucher</a>
                </div>
                <div className="col-xs-12 col-md-6 facebook">
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAndrea-Brucher-Concejal-100566178787890%2F&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" height="500" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" title="facebook"></iframe>
                </div>
                {/* <div className="col-4 instagram">
                <a className="twitter-timeline" data-width="250" data-height="500" data-theme="dark" href="https://twitter.com/andreabrucher?ref_src=twsrc%5Etfw">Tweets by andreabrucher</a>
                </div> */}
            </div>
            <div className="row no-gutters">
                <div className="col-xs-12 py-5 text-center">
                    <img src={YoMeAtrevo} alt="YoMeAtrevo" className="yomeatrevo" />
                </div>
            </div>
        </div>
    );
}

export default RRSS;