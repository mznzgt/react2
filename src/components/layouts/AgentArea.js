import React, {Component} from "react";
import {Link} from "react-router-dom";

class AgentArea extends Component {
    render() {
        return (
            <section className="agent-area text-center pd-top-98 pd-bottom-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2 className="title">Meet Our Agents</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-agent-wrap">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/agent/1.png'} alt="img" />
                                </div>
                                <div className="agent-wrap-details">
                                    <p className="agent-position">Seller</p>
                                    <h5>Clarissa Muir</h5>
                                    <div className="view-all-btn">
                                        <Link className="initiate-scripts" to={'/'}>View Profile<i className="fa fa-angle-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-agent-wrap">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/agent/2.png'} alt="img" />
                                </div>
                                <div className="agent-wrap-details">
                                    <p className="agent-position">Seller Agency</p>
                                    <h5>Soren Davidson</h5>
                                    <div className="view-all-btn">
                                        <Link className="initiate-scripts" to={'/'}>View Profile<i className="fa fa-angle-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-agent-wrap">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/agent/3.png'} alt="img" />
                                </div>
                                <div className="agent-wrap-details">
                                    <p className="agent-position">Real Estate Broker</p>
                                    <h5>Aimee Bradshaw</h5>
                                    <div className="view-all-btn">
                                        <Link className="initiate-scripts" to={'/'}>View Profile<i className="fa fa-angle-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-agent-wrap">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/agent/4.png'} alt="img" />
                                </div>
                                <div className="agent-wrap-details">
                                    <p className="agent-position">Seller</p>
                                    <h5>Lukasz Mitchell</h5>
                                    <div className="view-all-btn">
                                        <Link className="initiate-scripts" to={'/'}>View Profile<i className="fa fa-angle-right" /></Link>
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

export default AgentArea;