import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class Project extends Component{
    render() {
        return (
            <Section title={'Our Projects'} breadcrumbBackground={'assets/img/banner/6.png'}>
                <section className="project-page-area pd-top-80 pd-bottom-110">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-property-wrap">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/explore/1.png'} alt="img" />
                                    </div>
                                    <div className="property-wrap-details">
                                        <h4><Link className="initiate-scripts" to={'/'}>San Srancisco</Link></h4>
                                        <div className="meta">
                                            <span><i className="fas fa-home" aria-hidden="true" />256</span>
                                            <span><i className="fas fa-archway" aria-hidden="true" />256</span>
                                            <span className="mr-0"><i className="fas fa-map" aria-hidden="true" />256</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-property-wrap">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/explore/2.png'} alt="img" />
                                    </div>
                                    <div className="property-wrap-details">
                                        <h4><Link className="initiate-scripts" to={'/'}>New York</Link></h4>
                                        <div className="meta">
                                            <span><i className="fas fa-home" aria-hidden="true" />256</span>
                                            <span><i className="fas fa-archway" aria-hidden="true" />256</span>
                                            <span className="mr-0"><i className="fas fa-map" aria-hidden="true" />256</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
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
                            <div className="col-lg-3 col-sm-6">
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
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-property-wrap">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/explore/5.png'} alt="img" />
                                    </div>
                                    <div className="property-wrap-details">
                                        <h4><Link className="initiate-scripts" to={'/'}>Chicago</Link></h4>
                                        <div className="meta">
                                            <span><i className="fas fa-home" aria-hidden="true" />256</span>
                                            <span><i className="fas fa-archway" aria-hidden="true" />256</span>
                                            <span className="mr-0"><i className="fas fa-map" aria-hidden="true" />256</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-property-wrap">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/explore/6.png'} alt="img" />
                                    </div>
                                    <div className="property-wrap-details">
                                        <h4><Link className="initiate-scripts" to={'/'}>Philadelphia</Link></h4>
                                        <div className="meta">
                                            <span><i className="fas fa-home" aria-hidden="true" />256</span>
                                            <span><i className="fas fa-archway" aria-hidden="true" />256</span>
                                            <span className="mr-0"><i className="fas fa-map" aria-hidden="true" />256</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-property-wrap">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/explore/7.png'} alt="img" />
                                    </div>
                                    <div className="property-wrap-details">
                                        <h4><Link className="initiate-scripts" to={'/'}>San Antonio</Link></h4>
                                        <div className="meta">
                                            <span><i className="fas fa-home" aria-hidden="true" />256</span>
                                            <span><i className="fas fa-archway" aria-hidden="true" />256</span>
                                            <span className="mr-0"><i className="fas fa-map" aria-hidden="true" />256</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-property-wrap">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/explore/8.png'} alt="img" />
                                    </div>
                                    <div className="property-wrap-details">
                                        <h4><Link className="initiate-scripts" to={'/'}>San Diego</Link></h4>
                                        <div className="meta">
                                            <span><i className="fas fa-home" aria-hidden="true" />256</span>
                                            <span><i className="fas fa-archway" aria-hidden="true" />256</span>
                                            <span className="mr-0"><i className="fas fa-map" aria-hidden="true" />256</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-property-wrap">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/explore/9.png'} alt="img" />
                                    </div>
                                    <div className="property-wrap-details">
                                        <h4><Link className="initiate-scripts" to={'/'}>Dellas</Link></h4>
                                        <div className="meta">
                                            <span><i className="fas fa-home" aria-hidden="true" />256</span>
                                            <span><i className="fas fa-archway" aria-hidden="true" />256</span>
                                            <span className="mr-0"><i className="fas fa-map" aria-hidden="true" />256</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-property-wrap">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/explore/10.png'} alt="img" />
                                    </div>
                                    <div className="property-wrap-details">
                                        <h4><Link className="initiate-scripts" to={'/'}>San Jose</Link></h4>
                                        <div className="meta">
                                            <span><i className="fas fa-home" aria-hidden="true" />256</span>
                                            <span><i className="fas fa-archway" aria-hidden="true" />256</span>
                                            <span className="mr-0"><i className="fas fa-map" aria-hidden="true" />256</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-property-wrap">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/explore/11.png'} alt="img" />
                                    </div>
                                    <div className="property-wrap-details">
                                        <h4><Link className="initiate-scripts" to={'/'}>Jackwonville</Link></h4>
                                        <div className="meta">
                                            <span><i className="fas fa-home" aria-hidden="true" />256</span>
                                            <span><i className="fas fa-archway" aria-hidden="true" />256</span>
                                            <span className="mr-0"><i className="fas fa-map" aria-hidden="true" />256</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-property-wrap">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/explore/12.png'} alt="img" />
                                    </div>
                                    <div className="property-wrap-details">
                                        <h4><Link className="initiate-scripts" to={'/'}>Charlotte</Link></h4>
                                        <div className="meta">
                                            <span><i className="fas fa-home" aria-hidden="true" />256</span>
                                            <span><i className="fas fa-archway" aria-hidden="true" />256</span>
                                            <span className="mr-0"><i className="fas fa-map" aria-hidden="true" />256</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 text-center">
                                <ul className="pagination pagination-2">
                                    <li className="page-item"><Link className="page-link initiate-scripts" to={'/'}><i className="fa fa-angle-left" /></Link></li>
                                    <li className="page-item active"><Link className="page-link initiate-scripts" to={'/'}>01</Link></li>
                                    <li className="page-item"><Link className="page-link initiate-scripts" to={'/'}>02</Link></li>
                                    <li className="page-item"><Link className="page-link initiate-scripts" to={'/'}>03</Link></li>
                                    <li className="page-item"><Link className="page-link initiate-scripts" to={'/'}><i className="fa fa-angle-right" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Section>
        );
    }
}
export default Project;