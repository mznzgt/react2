import React, {Component} from "react";
import {Link} from "react-router-dom";

class HelpingArea extends Component {
    render() {
        return (
            <section className="helping-area pd-bottom-65">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h2 className="title">How We Help</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-helping-wrap text-center">
                                <h4>Buying or Selling</h4>
                                <p>Article nor prepare chicken you him now. Shy merits say advice ten before lovers
                                    innate add. She cordially behaviour can attempted estimable.</p>
                                <div className="view-all-btn">
                                    <Link className="initiate-scripts" to={'/'}>View Profile<i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-helping-wrap text-center">
                                <h4>Buying or Selling</h4>
                                <p>Article nor prepare chicken you him now. Shy merits say advice ten before lovers
                                    innate add. She cordially behaviour can attempted estimable.</p>
                                <div className="view-all-btn">
                                    <Link className="initiate-scripts" to={'/'}>View Profile<i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HelpingArea;