import React from 'react';
import { Link } from 'react-router-dom';
import Blog from '../components/blog.jsx';
import parse from 'html-react-parser';

const SingleBlog = props => {
    const blogurl = props.match.params.url;
    return (
        <div className="singleBlogContainer">
            <div className="card-group">
                <div className="row">
                    {
                        !!Blog ?
                            Blog.map((blo, i) => {
                                if (JSON.stringify(blo.url) === JSON.stringify(blogurl)) {
                                    return (
                                        <div className="row card-group mb-3 d-flex justify-content-center text-justify" key={i}>
                                            <div className="col-12 col-sm-3 my-auto">
                                                <img src={blo.foto} className="card-img-top" alt={blo.foto} />
                                                <Link to="/" className="btn btn-info d-flex justify-content-center mt-3">Atrás</Link>
                                            </div>
                                            <div className="col-12 col-sm-9 py-4">
                                                <h1 className="card-title">{blo.titulo}</h1>
                                                <h3 className="card-text">{blo.subtitulo}</h3>
                                                <div className="text-center py-5">
                                                    <iframe className="videosize" src={blo.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </div>
                                                <p className="card-text">{parse(blo.texto)}</p>
                                                <p className="card-text text-end py-5">{blo.fecha}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                            : (
                                <div className="text-center" id="undefined">
                                    <div className="spinner-grow text-light" role="status">
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
}

export default SingleBlog;