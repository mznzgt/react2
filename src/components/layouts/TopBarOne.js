import React, {Component} from "react";
import {Link} from "react-router-dom";

class TopBarOne extends Component {
    render() {
        return (
            <div className="topbar-area">
                <div className="rh-container container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7 align-self-center">
                            <div className="topbar-left">
                                <span><i className="fa fa-envelope" />contact@mail.com</span>
                                <span className="mr-0"><i className="fa fa-phone-alt" />+00 11 22 33456</span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="topbar-right text-md-right ">
                                <div className="country-select">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/icon/usa.png'} alt="img" />
                                    <select>
                                        <option>USA</option>
                                        <option value="1">UAE</option>
                                        <option value="2">UK</option>
                                    </select>
                                </div>
                                <span><Link className="initiate-scripts" to={'/'}>Sign in or Register</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopBarOne;