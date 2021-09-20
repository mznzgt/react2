import React, {Component} from "react";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area bg-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget widget widget_link">
                                <h4 className="widget-title">Popular Searches</h4>
                                <ul>
                                    <li><Link className="initiate-scripts" to={'/'}><i className="fa fa-angle-right" /> Apartment for Rent</Link></li>
                                    <li><Link className="initiate-scripts" to={'/'}><i className="fa fa-angle-right" />Apartment Low to hide</Link></li>
                                    <li><Link className="initiate-scripts" to={'/'}><i className="fa fa-angle-right" />Offices for Buy</Link></li>
                                    <li><Link className="initiate-scripts" to={'/'}><i className="fa fa-angle-right" />Offices for Rent</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget widget widget_link">
                                <h4 className="widget-title">Homepress Markets</h4>
                                <ul>
                                    <li><Link className="initiate-scripts" to={'/'}><i className="fa fa-angle-right" /> Los Angeles Offices</Link></li>
                                    <li><Link className="initiate-scripts" to={'/'}><i className="fa fa-angle-right" />Las Vegas Apartments</Link></li>
                                    <li><Link className="initiate-scripts" to={'/'}><i className="fa fa-angle-right" />Sacramento Townhome</Link></li>
                                    <li><Link className="initiate-scripts" to={'/'}><i className="fa fa-angle-right" />San Francisco Offices</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-widget widget widget_link">
                                <h4 className="widget-title">Quick Links</h4>
                                <ul>
                                    <li><Link className="initiate-scripts" to={'/'}><i className="fa fa-angle-right" /> Pricing Plans</Link></li>
                                    <li><Link className="initiate-scripts" to={'/'}><i className="fa fa-angle-right" />Our Services</Link></li>
                                    <li><Link className="initiate-scripts" to={'/'}><i className="fa fa-angle-right" />About Us</Link></li>
                                    <li><Link className="initiate-scripts" to={'/'}><i className="fa fa-angle-right" />Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-widget widget widget_subscribe">
                                <h4 className="widget-title">Subscribe Us</h4>
                                <div className="single-input-wrap">
                                    <input type="text" placeholder="Email address" />
                                    <button className="btn btn-base">Subscribe</button>
                                </div>
                                <ul className="social-area">
                                    <li className="title">Social Link:</li>
                                    <li><Link className="initiate-scripts" to={'/'}><i className="fab fa-facebook-f" /></Link></li>
                                    <li><Link className="initiate-scripts" to={'/'}><i className="fab fa-twitter" /></Link></li>
                                    <li><Link className="initiate-scripts" to={'/'}><i className="fab fa-instagram" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;