import React, {Component} from "react";
import {Link} from "react-router-dom";

class PartnerArea extends Component {
    render() {
        return (
            <div className="partner-area pd-top-100 pd-bottom-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="partner-slider owl-carousel owl-theme">
                                <div className="item">
                                    <div className="thumb">
                                        <Link className="initiate-scripts" to={'/'}><img src={process.env.PUBLIC_URL + '/assets/img/partner/1.png'} alt="img" /></Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="thumb">
                                        <Link className="initiate-scripts" to={'/'}><img src={process.env.PUBLIC_URL + '/assets/img/partner/2.png'} alt="img" /></Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="thumb">
                                        <Link className="initiate-scripts" to={'/'}><img src={process.env.PUBLIC_URL + '/assets/img/partner/3.png'} alt="img" /></Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="thumb">
                                        <Link className="initiate-scripts" to={'/'}><img src={process.env.PUBLIC_URL + '/assets/img/partner/4.png'} alt="img" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PartnerArea;