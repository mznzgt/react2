import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class PropertyTwo extends Component {
    render() {
        return (
            <Section title={'Property'} breadcrumbBackground={'assets/img/banner/5.png'}>
                <section className="property-page pd-top-80 pd-bottom-110">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="filter-area filter-area-2">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="pill" href="#pills-home">Buy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link border-0" data-toggle="pill" href="#pills-profile">Rent</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel">
                                            <div className="filter-wrap">
                                                <div className="single-input-wrap">
                                                    <input type="text" className="form-control" placeholder="Search Location" />
                                                </div>
                                                <div className="single-select-wrap">
                                                    <select>
                                                        <option>Residental</option>
                                                        <option value="1">Residental 1</option>
                                                        <option value="2">Residental 2</option>
                                                    </select>
                                                </div>
                                                <div className="single-select-wrap">
                                                    <select>
                                                        <option>Bed</option>
                                                        <option value="1">2 Bed</option>
                                                        <option value="2">3 Bed</option>
                                                    </select>
                                                </div>
                                                <div className="single-select-wrap">
                                                    <select>
                                                        <option>Bath</option>
                                                        <option value="1">2 bath</option>
                                                        <option value="2">3 bath</option>
                                                    </select>
                                                </div>
                                                <div className="single-select-wrap">
                                                    <select>
                                                        <option>Price(USD)</option>
                                                        <option value="1">Price(Euro)</option>
                                                        <option value="2">Price(Rupee)</option>
                                                    </select>
                                                </div>
                                                <Link className="btn btn-base initiate-scripts" to={'/'}><i className="fas fa-search-location" />Search</Link>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel">
                                            <div className="filter-wrap">
                                                <div className="single-input-wrap">
                                                    <input type="text" className="form-control" placeholder="Search Location" />
                                                </div>
                                                <div className="single-select-wrap">
                                                    <select>
                                                        <option>Residental</option>
                                                        <option value="1">Residental 1</option>
                                                        <option value="2">Residental 2</option>
                                                    </select>
                                                </div>
                                                <div className="single-select-wrap">
                                                    <select>
                                                        <option>Bed</option>
                                                        <option value="1">2 Bed</option>
                                                        <option value="2">3 Bed</option>
                                                    </select>
                                                </div>
                                                <div className="single-select-wrap">
                                                    <select>
                                                        <option>Bath</option>
                                                        <option value="1">2 bath</option>
                                                        <option value="2">3 bath</option>
                                                    </select>
                                                </div>
                                                <div className="single-select-wrap">
                                                    <select>
                                                        <option>Price(USD)</option>
                                                        <option value="1">Price(Euro)</option>
                                                        <option value="2">Price(Rupee)</option>
                                                    </select>
                                                </div>
                                                <Link className="btn btn-base initiate-scripts" to={'/'}><i className="fas fa-search-location" />Search</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6">
                                <div className="single-property-wrap media">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/property/4L.png'} alt="img" />
                                    </div>
                                    <div className="media-body property-wrap-details">
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
                                <div className="single-property-wrap media">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/property/6L.png'} alt="img" />
                                    </div>
                                    <div className="media-body property-wrap-details">
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
                                <div className="single-property-wrap media">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/property/7L.png'} alt="img" />
                                    </div>
                                    <div className="media-body property-wrap-details">
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
                                <div className="single-property-wrap media">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/property/3L.png'} alt="img" />
                                    </div>
                                    <div className="media-body property-wrap-details">
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
                                <div className="single-property-wrap media">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/property/5L.png'} alt="img" />
                                    </div>
                                    <div className="media-body property-wrap-details">
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
                            <div className="col-lg-12 text-center">
                                <ul className="pagination pagination-2">
                                    <li className="page-item"><Link className="page-link initiate-scripts" to={'/'}><i className="fa fa-angle-left" aria-hidden="true" /></Link></li>
                                    <li className="page-item active"><Link className="page-link initiate-scripts" to={'/'}>01</Link></li>
                                    <li className="page-item"><Link className="page-link initiate-scripts" to={'/'}>02</Link></li>
                                    <li className="page-item"><Link className="page-link initiate-scripts" to={'/'}>03</Link></li>
                                    <li className="page-item"><Link className="page-link initiate-scripts" to={'/'}><i className="fa fa-angle-right" aria-hidden="true" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Section>
        );
    }
}

export default PropertyTwo;