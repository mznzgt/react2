import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class PropertyDetails extends Component{
    render() {
        return (
            <Section title={'Property Single'} breadcrumbBackground={'assets/img/banner/5.png'}>
                <section className="single-property-area pd-top-80 pd-bottom-80">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="product-thumbnail-wrapper">
                                    <div className="single-thumbnail-slider">
                                        <div className="slider-item">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/property/B2.png'} alt="item" />
                                        </div>
                                        <div className="slider-item">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/property/B2.png'} alt="item" />
                                        </div>
                                        <div className="slider-item">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/property/B2.png'} alt="item" />
                                        </div>
                                        <div className="slider-item">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/property/B2.png'} alt="item" />
                                        </div>
                                        <div className="slider-item">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/property/B2.png'} alt="item" />
                                        </div>
                                    </div>
                                    <div className="product-thumbnail-carousel">
                                        <div className="single-thumbnail-item">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/property/slider1.png'} alt="item" />
                                        </div>
                                        <div className="single-thumbnail-item">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/property/slider2.png'} alt="item" />
                                        </div>
                                        <div className="single-thumbnail-item">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/property/slider3.png'} alt="item" />
                                        </div>
                                        <div className="single-thumbnail-item">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/property/slider4.png'} alt="item" />
                                        </div>
                                        <div className="single-thumbnail-item">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/property/slider1.png'} alt="item" />
                                        </div>
                                        <div className="single-thumbnail-item">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/property/slider2.png'} alt="item" />
                                        </div>
                                        <div className="single-thumbnail-item">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/property/slider3.png'} alt="item" />
                                        </div>
                                        <div className="single-thumbnail-item">
                                            <img src={process.env.PUBLIC_URL + '/assets/img/property/slider4.png'} alt="item" />
                                        </div>
                                    </div>
                                </div>
                                <div className="property-details-inner">
                                    <div className="meta">
                                        <span><i className="fas fa-bed" aria-hidden="true" />01 Bedrooms</span>
                                        <span><i className="fas fa-bath" aria-hidden="true" />02 Bathrooms</span>
                                        <span className="mr-0"><i className="fas fa-expand" aria-hidden="true" />1256 sq</span>
                                    </div>
                                    <h3><Link className="initiate-scripts" to={'/'}>Brand New 1 Bedroom Apartment In First Class</Link></h3>
                                    <h4 className="price">$245/monthly</h4>
                                    <span className="price"><del>$295/monthly</del></span>
                                    <p>Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye
                                        your as fail lady. Up greatest am exertion or marianne. Shy occasional
                                        terminated insensible and inhabiting gay. So know do fond to half on. Now who
                                        promise was justice new winding. In finished on he speaking suitable advanced
                                        if. Boy happiness sportsmen say prevailed offending concealed nor was provision.
                                        Provided so as doubtful on striking required. Waiting we to compass
                                        assured. </p>
                                    <div className="overview-area">
                                        <h5 className="sm-title">Overview</h5>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <table className="table">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">Type</th>
                                                        <th scope="col"><span>:</span> Apartment</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <th scope="row">Price</th>
                                                        <td><span>:</span> USD 245</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Bedroom</th>
                                                        <td><span>:</span> 4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Bath</th>
                                                        <td><span>:</span> 3</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="col-lg-6">
                                                <table className="table m-0">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">Area</th>
                                                        <th scope="col"><span>:</span> 1325 sqft</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <th scope="row">Purpose</th>
                                                        <td><span>:</span> For Rent</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Location</th>
                                                        <td><span>:</span> West Firojshah Colony, 9</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Ref. No</th>
                                                        <td><span>:</span> ReallHomes - ID5054261</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location-area">
                                        <h5 className="sm-title">Location</h5>
                                        <div className="location-map">
                                            <iframe
                                                title="google map"
                                                className="w-100"
                                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60021.82409444856!2d-122.40118071595978!3d37.7546723469594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1577786376747!5m2!1sen!2sbd"
                                                style={{border: 0}}
                                                allowFullScreen="" />
                                        </div>
                                    </div>
                                    <div className="amenities-area">
                                        <h5 className="sm-title">Features / Amenities</h5>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="media">
                                                    <div className="icon">
                                                        <img src={process.env.PUBLIC_URL + '/assets/img/icon/road.png'} alt="img" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6>Road</h6>
                                                        <p>80 Feet</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="media">
                                                    <div className="icon">
                                                        <img src={process.env.PUBLIC_URL + '/assets/img/icon/book.png'} alt="img" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6>School</h6>
                                                        <p>Yes</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="media">
                                                    <div className="icon">
                                                        <img src={process.env.PUBLIC_URL + '/assets/img/icon/school.png'} alt="img" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6>College</h6>
                                                        <p>Yes</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="media">
                                                    <div className="icon">
                                                        <img src={process.env.PUBLIC_URL + '/assets/img/icon/helipad.png'} alt="img" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6>Helipad</h6>
                                                        <p>Yes</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="media">
                                                    <div className="icon">
                                                        <img src={process.env.PUBLIC_URL + '/assets/img/icon/sell.png'} alt="img" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6>Shopping</h6>
                                                        <p>Yes</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="media">
                                                    <div className="icon">
                                                        <img src={process.env.PUBLIC_URL + '/assets/img/icon/graduation.png'} alt="img" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6>University</h6>
                                                        <p>Yes</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="media">
                                                    <div className="icon">
                                                        <i className="fa fa-hospital" aria-hidden="true" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6>Hospital</h6>
                                                        <p>Yes</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="media">
                                                    <div className="icon">
                                                        <img src={process.env.PUBLIC_URL + '/assets/img/icon/cctv.png'} alt="img" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6>CCTV</h6>
                                                        <p>Yes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nearby-location-area">
                                        <h5 className="sm-title">Location & Nearby</h5>
                                        <div className="row">
                                            <div className="col-md-3 col-6">
                                                <div className="location-wrap">
                                                    <div className="icon" style={{backgroundImage: "url(assets/img/property/map.png)"}}>
                                                        <i className="fas fa-utensils" />
                                                    </div>
                                                    <h5>Restaurants</h5>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <div className="location-wrap">
                                                    <div className="icon" style={{backgroundImage: "url(assets/img/property/map.png)"}}>
                                                        <img src={process.env.PUBLIC_URL + '/assets/img/icon/park.png'} alt="img" />
                                                    </div>
                                                    <h5>Parks</h5>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <div className="location-wrap">
                                                    <div className="icon" style={{backgroundImage: "url(assets/img/property/map.png)"}}>
                                                        <img src={process.env.PUBLIC_URL + '/assets/img/icon/book1.png'} alt="img" />
                                                    </div>
                                                    <h5>School</h5>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <div className="location-wrap">
                                                    <div className="icon" style={{backgroundImage: "url(assets/img/property/map.png)"}}>
                                                        <img src={process.env.PUBLIC_URL + '/assets/img/icon/pharmacy.png'} alt="img" />
                                                    </div>
                                                    <h5>Hospital</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="more-projects">
                                    <h5 className="sm-title">See Also</h5>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-property-wrap">
                                                <div className="thumb">
                                                    <img src={process.env.PUBLIC_URL + '/assets/img/property/4.png'} alt="img" />
                                                </div>
                                                <div className="property-wrap-details">
                                                    <h4><Link className="initiate-scripts" to={'/'}>5412 Talbot St. Bridge, NJ 05807</Link></h4>
                                                    <span className="price">$245/mo</span>
                                                    <div className="meta meta-2">
                                                        <span><i className="fas fa-bed" aria-hidden="true" />05 bed</span>
                                                        <span><i className="fas fa-bath" aria-hidden="true" />04 Bath</span>
                                                        <span className="mr-0"><i className="fas fa-expand" aria-hidden="true" />1256 sq</span>
                                                    </div>
                                                    <div className="btn-area">
                                                        <Link className="btn btn-base initiate-scripts" to={'/'}>View Details</Link>
                                                        <Link className="btn btn-icon initiate-scripts" to={'/'}><i className="fa fa-envelope" aria-hidden="true" /></Link>
                                                        <Link className="btn btn-icon initiate-scripts" to={'/'}><i className="fa fa-phone" aria-hidden="true" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-property-wrap">
                                                <div className="thumb">
                                                    <img src={process.env.PUBLIC_URL + '/assets/img/property/7.png'} alt="img" />
                                                </div>
                                                <div className="property-wrap-details">
                                                    <h4><Link className="initiate-scripts" to={'/'}>Nice Apartment for Rent In Berlin</Link></h4>
                                                    <span className="price">$245/mo</span>
                                                    <div className="meta meta-2">
                                                        <span><i className="fas fa-bed" aria-hidden="true" />05 bed</span>
                                                        <span><i className="fas fa-bath" aria-hidden="true" />04 Bath</span>
                                                        <span className="mr-0"><i className="fas fa-expand" aria-hidden="true" />1256 sq</span>
                                                    </div>
                                                    <div className="btn-area">
                                                        <Link className="btn btn-base initiate-scripts" to={'/'}>View Details</Link>
                                                        <Link className="btn btn-icon initiate-scripts" to={'/'}><i className="fa fa-envelope" aria-hidden="true" /></Link>
                                                        <Link className="btn btn-icon initiate-scripts" to={'/'}><i className="fa fa-phone" aria-hidden="true" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="sidebar-area">
                                    <div className="widget widget-contact">
                                        <h5 className="widget-title">Contact Us for More Info</h5>
                                        <form>
                                            <div className="single-input-wrap single-input-wrap-2">
                                                <input type="text" className="form-control" placeholder="Name*" />
                                            </div>
                                            <div className="single-input-wrap single-input-wrap-2">
                                                <input type="text" className="form-control" placeholder="Email*" />
                                            </div>
                                            <div className="single-input-wrap single-input-wrap-2">
                                                <input type="text" className="form-control" placeholder="Phone*" />
                                            </div>
                                            <div className="single-input-wrap single-input-wrap-2">
                                                <textarea className="form-control" rows="4" name="note" placeholder="Message" />
                                            </div>
                                            <div className="submit-area">
                                                <button type="submit" className="btn btn-base w-100">Send Message</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Section>
        );
    }
}

export default PropertyDetails;