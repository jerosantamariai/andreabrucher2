import React from 'react';

const RRSS = props => {
    return (
        <div className="RRSS no-gutters my-4 ml-4" id="RRSS" >
            <h1>RRSS</h1>
            <div className="row rowsocial text-center pt-5 no-gutters">
                <div className="col-4 twitter">
                    <a className="twitter-timeline" data-width="250" data-height="500" data-theme="light" href="https://twitter.com/andreabrucher?ref_src=twsrc%5Etfw">Tweets by andreabrucher</a>
                </div>
                <div className="col-4 facebook">
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAndrea-Brucher-Concejal-100566178787890%2F&tabs=timeline&width=250&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="250" height="500" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
                <div className="col-4 instagram">
                    <a className="twitter-timeline" data-width="250" data-height="500" data-theme="light" href="https://twitter.com/andreabrucher?ref_src=twsrc%5Etfw">Tweets by andreabrucher</a>
                </div>
            </div>
        </div >
    );
}

export default RRSS;