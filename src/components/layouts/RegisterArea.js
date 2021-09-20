import React, {Component} from "react";
import {Link} from "react-router-dom";

class RegisterArea extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="register-area text-center pd-top-98 pd-bottom-110" style={{backgroundImage: "url(assets/img/register/bg.png)"}}>
                            <h2>Become a Real Estate Agent</h2>
                            <p>Sell your property or give rent your apartment without any hidden cost</p>
                            <Link className="btn btn-base initiate-scripts" to={'/'}>Register Now</Link>
                            <Link className="btn btn-black initiate-scripts" to={'/'}>More Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterArea;