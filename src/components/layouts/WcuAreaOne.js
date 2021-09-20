import React, {Component} from "react";

class WcuAreaOne extends Component {
    render() {
        return (
            <section className="wcu-area bg-grey text-center pd-top-98 pd-bottom-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2 className="title">Why Choose Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-wcu-wrap">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/wcu/1.png'} alt="img" />
                                </div>
                                <div className="wrap-details">
                                    <h4>Wide Range of Properties</h4>
                                    <p>Is education residence conveying so so. Suppose shyness say ten behaved.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-wcu-wrap">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/wcu/2.png'} alt="img" />
                                </div>
                                <div className="wrap-details">
                                    <h4>Financing Made Easy</h4>
                                    <p>Is education residence conveying so so. Suppose shyness say ten behaved.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-wcu-wrap">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/wcu/3.png'} alt="img" />
                                </div>
                                <div className="wrap-details">
                                    <h4>Trust by Thousands</h4>
                                    <p>Is education residence conveying so so. Suppose shyness say ten behaved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WcuAreaOne;