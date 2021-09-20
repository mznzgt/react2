import React, {Component} from "react";
import {Link} from "react-router-dom";

class ExplorePropertyArea extends Component {
    render() {
        return (
            <section className="explore-property-area pd-top-98">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2 className="title">Explore the Neighborhoods</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="explore-slider owl-carousel owl-theme">
                                <div className="item">
                                    <div className="single-property-wrap">
                                        <div className="thumb">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/explore/1.png'} alt="img" />
                                        </div>
                                        <div className="property-wrap-details">
                                            <h4><Link className="initiate-scripts" to={'/'}>San Srancisco</Link></h4>
                                            <div className="meta">
                                                <span><i className="fas fa-home" />256</span>
                                                <span><i className="fas fa-archway" />256</span>
                                                <span className="mr-0"><i className="fas fa-map" />256</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-property-wrap">
                                        <div className="thumb">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/explore/2.png'} alt="img" />
                                        </div>
                                        <div className="property-wrap-details">
                                            <h4><Link className="initiate-scripts" to={'/'}>New York</Link></h4>
                                            <div className="meta">
                                                <span><i className="fas fa-home" />256</span>
                                                <span><i className="fas fa-archway" />256</span>
                                                <span className="mr-0"><i className="fas fa-map" />256</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-property-wrap">
                                        <div className="thumb">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/explore/3.png'} alt="img" />
                                        </div>
                                        <div className="property-wrap-details">
                                            <h4><Link className="initiate-scripts" to={'/'}>Las Vegas</Link></h4>
                                            <div className="meta">
                                                <span><i className="fas fa-home" />256</span>
                                                <span><i className="fas fa-archway" />256</span>
                                                <span className="mr-0"><i className="fas fa-map" />256</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-property-wrap">
                                        <div className="thumb">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/explore/4.png'} alt="img" />
                                        </div>
                                        <div className="property-wrap-details">
                                            <h4><Link className="initiate-scripts" to={'/'}>Washington DC</Link></h4>
                                            <div className="meta">
                                                <span><i className="fas fa-home" />256</span>
                                                <span><i className="fas fa-archway" />256</span>
                                                <span className="mr-0"><i className="fas fa-map" />256</span>
                                            </div>
                                        </div>
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

export default ExplorePropertyArea;