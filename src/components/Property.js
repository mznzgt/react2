import React, {Component} from "react";
import Section from "./layouts/Section";
import RecentPropertyArea from "./layouts/RecentPropertyArea";
import {Link} from "react-router-dom";

class Property extends Component {
    render() {
        return (
            <Section title={'Property'} breadcrumbBackground={'assets/img/banner/5.png'}>
                <div className="property-page-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="filter-area">
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
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="single-input-wrap">
                                                            <input type="text" className="form-control" placeholder="Search Location" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="row justify-content-center">
                                                            <div className="col-lg-4 col-md-6">
                                                                <div className="single-select-wrap">
                                                                    <select>
                                                                        <option>Residental</option>
                                                                        <option value="1">Residental</option>
                                                                        <option value="2">Residental</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-6">
                                                                <div className="single-select-wrap">
                                                                    <select>
                                                                        <option>Price(USD)</option>
                                                                        <option value="1">Price(Euro)</option>
                                                                        <option value="2">Price(Rupee)</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <Link className="btn btn-base initiate-scripts" to={'/'}><i className="fas fa-search-location" />Search</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel">
                                            <div className="filter-wrap">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="single-input-wrap">
                                                            <input type="text" className="form-control" placeholder="Search Location" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="row justify-content-center">
                                                            <div className="col-lg-4 col-md-6">
                                                                <div className="single-select-wrap">
                                                                    <select>
                                                                        <option>Residental</option>
                                                                        <option value="1">Residental</option>
                                                                        <option value="2">Residental</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-6">
                                                                <div className="single-select-wrap">
                                                                    <select>
                                                                        <option>Price(USD)</option>
                                                                        <option value="1">Price(Euro)</option>
                                                                        <option value="2">Price(Rupee)</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <Link className="btn btn-base initiate-scripts" to={'/'}><i className="fas fa-search-location" />Search</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Property Area Imported from Layouts */}
                <RecentPropertyArea />
            </Section>
        );
    }
}

export default Property;