import React from 'react';

const Footer = props => {
    return (
        <footer>
            <div className="row no-gutters py-3">
                <div className="col-12 pt-3 text-center">
                    <a href="https://www.facebook.com/andrea.brucherconcejal" target="_blank" rel="noreferrer"><i class="fab fa-facebook fa-2x pr-5"></i></a>
                    <a href="https://twitter.com/andreabrucher?s=20" target="_blank" rel="noreferrer"><i class="fab fa-twitter fa-2x pr-5"></i></a>
                    <a href="https://www.instagram.com/andreabrucherconcejal/" target="_blank" rel="noreferrer"><i class="fab fa-instagram fa-2x pr-5"></i></a>
                    <a href="https://www.youtube.com/channel/UCmzzW1X8MXfm5WfhEIubdmQ" target="_blank" rel="noreferrer"><i class="fab fa-youtube fa-2x"></i></a>
                </div>
            </div><div className="row no-gutters">
                <div className="col-12 py-3 text-center">
                    <p>Página diseñada y programada por <a href="http://www.santamariai.cl">JEROSANTAMARIAI</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;