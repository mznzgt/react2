import React, {Component} from "react";
import {Link} from "react-router-dom";

class TopPropertyArea extends Component {
    render() {
        return (
            <section className="top-property-area pd-top-88 pd-bottom-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <div className="section-title">
                                <h2 className="title">Top Properties</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="view-all-btn text-md-right">
                                <Link className="initiate-scripts" to={'/'}>View All Top Properties<i className="fa fa-angle-right" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="single-property-wrap single-property-wrap-2">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/property/1.png'} alt="img" />
                                </div>
                                <div className="property-wrap-details">
                                    <h4><Link className="initiate-scripts" to={'/'}>98 Talbot St. Bridgewater, NJ 08567</Link></h4>
                                    <span className="price">$245/mo</span>
                                    <div className="meta">
                                        <span><i className="fas fa-bed" />5</span>
                                        <span><i className="fas fa-bath" />5</span>
                                        <span className="mr-0"><i className="fas fa-expand" />1256</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="single-property-wrap single-property-wrap-2">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/property/2.png'} alt="img" />
                                </div>
                                <div className="property-wrap-details">
                                    <h4><Link className="initiate-scripts" to={'/'}>28 Westport Dr. Warminster, SR 189541</Link></h4>
                                    <span className="price">$245/mo</span>
                                    <div className="meta">
                                        <span><i className="fas fa-bed" />5</span>
                                        <span><i className="fas fa-bath" />5</span>
                                        <span className="mr-0"><i className="fas fa-expand" />1256</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-property-wrap">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/property/3.png'} alt="img" />
                                </div>
                                <div className="property-wrap-details">
                                    <h4><Link className="initiate-scripts" to={'/'}>5412 Talbot St. Bridge, NJ 05807</Link></h4>
                                    <span className="price">$245/mo</span>
                                    <div className="meta meta-2">
                                        <span><i className="fas fa-bed" />05 bed</span>
                                        <span><i className="fas fa-bath" />04 Bath</span>
                                        <span className="mr-0"><i className="fas fa-expand" />1256 sq</span>
                                    </div>
                                    <div className="btn-area">
                                        <Link className="btn btn-base initiate-scripts" to={'/'}>View Details</Link>
                                        <Link className="btn btn-icon initiate-scripts" to={'/'}><i className="fa fa-envelope" /></Link>
                                        <Link className="btn btn-icon initiate-scripts" to={'/'}><i className="fa fa-phone" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-property-wrap">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/property/4.png'} alt="img" />
                                </div>
                                <div className="property-wrap-details">
                                    <h4><Link className="initiate-scripts" to={'/'}>Brand New 1 Bedroom Apartment In First Class</Link></h4>
                                    <span className="price">$245/mo</span>
                                    <div className="meta meta-2">
                                        <span><i className="fas fa-bed" />05 bed</span>
                                        <span><i className="fas fa-bath" />04 Bath</span>
                                        <span className="mr-0"><i className="fas fa-expand" />1256 sq</span>
                                    </div>
                                    <div className="btn-area">
                                        <Link className="btn btn-base initiate-scripts" to={'/'}>View Details</Link>
                                        <Link className="btn btn-icon initiate-scripts" to={'/'}><i className="fa fa-envelope" /></Link>
                                        <Link className="btn btn-icon initiate-scripts" to={'/'}><i className="fa fa-phone" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-property-wrap">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/property/5.png'} alt="img" />
                                </div>
                                <div className="property-wrap-details">
                                    <h4><Link className="initiate-scripts" to={'/'}>Nice Apartment for Rent In Berlin</Link></h4>
                                    <span className="price">$245/mo</span>
                                    <div className="meta meta-2">
                                        <span><i className="fas fa-bed" />05 bed</span>
                                        <span><i className="fas fa-bath" />04 Bath</span>
                                        <span className="mr-0"><i className="fas fa-expand" />1256 sq</span>
                                    </div>
                                    <div className="btn-area">
                                        <Link className="btn btn-base initiate-scripts" to={'/'}>View Details</Link>
                                        <Link className="btn btn-icon initiate-scripts" to={'/'}><i className="fa fa-envelope" /></Link>
                                        <Link className="btn btn-icon initiate-scripts" to={'/'}><i className="fa fa-phone" /></Link>
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

export default TopPropertyArea;