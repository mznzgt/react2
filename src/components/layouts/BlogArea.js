import React, {Component} from "react";
import {Link} from "react-router-dom";

class BlogArea extends Component {
    render() {
        return (
            <section className="blog-area pd-top-88 pd-bottom-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h2 className="title">Latest News</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-wrap">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/blog/1.png'} alt="img" />
                                    <div className="date">
                                        <h4>12</h4>
                                        <p>Jan</p>
                                    </div>
                                </div>
                                <div className="blog-wrap-details">
                                    <h5><Link className="initiate-scripts" to={'/'}>Sociable Formerly Six But Handsome imagine.</Link></h5>
                                    <p>It in adapted natural hastily is justice. Six draw you him full not mean evil.</p>
                                    <div className="view-all-btn">
                                        <Link className="initiate-scripts" to={'/'}>Read More<i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-wrap">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/blog/2.png'} alt="img" />
                                    <div className="date">
                                        <h4>12</h4>
                                        <p>Jan</p>
                                    </div>
                                </div>
                                <div className="blog-wrap-details">
                                    <h5><Link className="initiate-scripts" to={'/'}>Sociable Formerly Six But Handsome imagine.</Link></h5>
                                    <p>It in adapted natural hastily is justice. Six draw you him full not mean evil.</p>
                                    <div className="view-all-btn">
                                        <Link className="initiate-scripts" to={'/'}>Read More<i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-wrap">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/blog/3.png'} alt="img" />
                                    <div className="date">
                                        <h4>12</h4>
                                        <p>Jan</p>
                                    </div>
                                </div>
                                <div className="blog-wrap-details">
                                    <h5><Link className="initiate-scripts" to={'/'}>Sociable Formerly Six But Handsome imagine.</Link></h5>
                                    <p>It in adapted natural hastily is justice. Six draw you him full not mean evil.</p>
                                    <div className="view-all-btn">
                                        <Link className="initiate-scripts" to={'/'}>Read More<i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogArea;