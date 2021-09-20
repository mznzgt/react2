import React, {Component} from "react";
import {Link} from "react-router-dom";

class NavigationTwo extends Component {
    render() {
        return (
            <div className="navbar-area navbar-area-2">
                <nav className="navbar navbar-expand-lg">
                    <div className="container nav-container">
                        <div className="responsive-mobile-menu">
                            <button className="menu toggle-btn d-block d-lg-none" data-target="#themefie_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-left" />
                                <span className="icon-right" />
                            </button>
                        </div>
                        <div className="logo">
                            <Link className="main-logo" to={'/'}><img src={process.env.PUBLIC_URL + '/assets/img/logo-2.png'} alt="img" /></Link>
                        </div>
                        <div className="nav-right-part nav-right-part-mobile">
                            <Link className="btn btn-base" to={'/'}>Submit Listing</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="themefie_main_menu">
                            <ul className="navbar-nav text-center menu-open">
                                <li className="menu-item-has-children current-menu-item">
                                    <Link className="initiate-scripts" to={'/'}>Home</Link>
                                    <ul className="sub-menu">
                                        <li><Link className="initiate-scripts" to={'/home-one'}>Home 01</Link></li>
                                        <li><Link className="initiate-scripts" to={'/home-two'}>Home 02</Link></li>
                                        <li><Link className="initiate-scripts" to={'/home-three'}>Home 03</Link></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children current-menu-item">
                                    <Link className="initiate-scripts" to={'/project'}>Our Projects</Link>
                                    <ul className="sub-menu">
                                        <li><Link className="initiate-scripts" to={'/project'}>Projects 01</Link></li>
                                        <li><Link className="initiate-scripts" to={'/project-details'}>Projects Details</Link></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children current-menu-item">
                                    <Link className="initiate-scripts" to={'/property-one'}>Property</Link>
                                    <ul className="sub-menu">
                                        <li><Link className="initiate-scripts" to={'/property-one'}>Property Grid View</Link></li>
                                        <li><Link className="initiate-scripts" to={'/property-two'}>Property List View</Link></li>
                                        <li><Link className="initiate-scripts" to={'/property-details'}>Property Details</Link></li>
                                    </ul>
                                </li>
                                <li><Link className="initiate-scripts" to={'/agent'}>Agents</Link></li>
                                <li><Link className="initiate-scripts" to={'/about'}>About</Link></li>
                            </ul>
                        </div>
                        <div className="nav-right-part nav-right-part-desktop">
                            <ul>
                                <li className=""><Link className="btn btn-base initiate-scripts" to={'/'}>Submit Listing</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavigationTwo;