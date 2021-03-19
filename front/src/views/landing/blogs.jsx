import React from 'react';
import Blog from '../../components/blog.jsx';

const Blogs = props => {
    return (
        <div className="blog-container" id="blog" >
            <h1>BLOG</h1>
            <div class="card-group">
                <div className="row d-flex justify-content-center mx-1">
                    {
                        !!Blog ?
                            Blog.map((blo, i) => {
                                return (
                                    <div className="card blogcard col-12 col-sm-4 mx-auto mb-3" key={i}>
                                        <img src={blo.foto} className="card-img-top mx-auto" alt={blo.img}
                                            id="blogimg"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title text-justify">{blo.titulo}</h5>
                                            <p className="card-text text-justify">{blo.subtitulo}</p>
                                            <small>{blo.fecha}</small>
                                        </div>
                                    </div>
                                )
                            })
                            : (
                                <div class="text-center" id="undefined">
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

export default Blogs;