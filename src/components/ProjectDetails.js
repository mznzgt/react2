import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class ProjectDetails extends Component{
    render() {
        return (
            <Section title={'Projects Single'} breadcrumbBackground={'assets/img/banner/6.png'}>
                <section className="single-project-area pd-top-80 pd-bottom-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="project-details-inner">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/property/B1.png'} alt="img" />
                                    </div>
                                    <div className="project-details-wrap">
                                        <div className="meta">
                                            <span>
                                                <span className="title">Plot Type</span>
                                                <span className="subtitle">Commercial</span>
                                            </span>
                                            <span>
                                                <span className="title">Available From</span>
                                                <span className="subtitle">Ready Plot</span>
                                            </span>
                                            <span>
                                                <span className="title">Payment</span>
                                                <span className="subtitle">Onetime</span>
                                            </span>
                                        </div>
                                        <h3><Link className="initiate-scripts" to={'/'}>New York</Link></h3>
                                        <p>Shy occasional terminated insensible and inhabiting gay. So know do fond to
                                            half on. Now who promise was justice new winding. In finished on he speaking
                                            suitable advanced if. Boy happiness sportsmen say prevailed offending
                                            concealed nor was provision.</p>
                                        <div className="keypoint-area">
                                            <h5 className="sm-title">Keypoints</h5>
                                            <p>Day handsome addition horrible sensible goodness two contempt. Evening
                                                for married his account removal. Estimable me disposing of be moonlight
                                                cordially curiosity.</p>
                                            <ul>
                                                <li><span>Project name: </span><Link className="initiate-scripts" to={'/'}>Real Home at New Work</Link></li>
                                                <li><span>Plot Number: </span>Block M - 1689, 1690</li>
                                            </ul>
                                        </div>
                                        <div className="amenities-area">
                                            <h5 className="sm-title">Amenities</h5>
                                            <div className="row">
                                                <div className="col-md-3 col-6">
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
                                                <div className="col-md-3 col-6">
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
                                                <div className="col-md-3 col-6">
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
                                                <div className="col-md-3 col-6">
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
                                                <div className="col-md-3 col-6">
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
                                                <div className="col-md-3 col-6">
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
                                                <div className="col-md-3 col-6">
                                                    <div className="media">
                                                        <div className="icon">
                                                            <i className="fa fa-hospital" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6>Hospital</h6>
                                                            <p>Yes</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-6">
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
                                    </div>
                                </div>
                                <div className="more-projects">
                                    <h5 className="sm-title">More Plots in this Project</h5>
                                    <div className="row">
                                        <div className="col-lg-5 col-sm-6">
                                            <div className="single-property-wrap">
                                                <div className="thumb">
                                                    <img src={process.env.PUBLIC_URL + '/assets/img/explore/3.png'} alt="img" />
                                                </div>
                                                <div className="property-wrap-details">
                                                    <h4><Link className="initiate-scripts" to={'/'}>Las Vegas</Link></h4>
                                                    <div className="meta">
                                                        <span><i className="fas fa-home" aria-hidden="true" />256</span>
                                                        <span><i className="fas fa-archway" aria-hidden="true" />256</span>
                                                        <span className="mr-0"><i className="fas fa-map" aria-hidden="true" />256</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-sm-6">
                                            <div className="single-property-wrap">
                                                <div className="thumb">
                                                    <img src={process.env.PUBLIC_URL + '/assets/img/explore/4.png'} alt="img" />
                                                </div>
                                                <div className="property-wrap-details">
                                                    <h4><Link className="initiate-scripts" to={'/'}>Washington DC</Link></h4>
                                                    <div className="meta">
                                                        <span><i className="fas fa-home" aria-hidden="true" />256</span>
                                                        <span><i className="fas fa-archway" aria-hidden="true" />256</span>
                                                        <span className="mr-0"><i className="fas fa-map" aria-hidden="true" />256</span>
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

export default ProjectDetails;