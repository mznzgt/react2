import React, {Component} from "react";

class WcuAreaTwo extends Component {
    render() {
        return (
            <section className="wcu-area bg-grey text-center pd-top-98 pd-bottom-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2 className="title">What Makes Us The Preferred Choice</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-wcu-wrap">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/wcu/01.png'} alt="img" />
                                </div>
                                <div className="wrap-details">
                                    <h4>Maximum Choices</h4>
                                    <p>Offered say visited elderly and. Waited period are played family man formed.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-wcu-wrap">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/wcu/02.png'} alt="img" />
                                </div>
                                <div className="wrap-details">
                                    <h4>Buyers Trust Us</h4>
                                    <p>Offered say visited elderly and. Waited period are played family man formed.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-wcu-wrap">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/wcu/03.png'} alt="img" />
                                </div>
                                <div className="wrap-details">
                                    <h4>Seller Prefer Us</h4>
                                    <p>Offered say visited elderly and. Waited period are played family man formed.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-wcu-wrap">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/wcu/04.png'} alt="img" />
                                </div>
                                <div className="wrap-details">
                                    <h4>Expert Guidance</h4>
                                    <p>Offered say visited elderly and. Waited period are played family man formed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WcuAreaTwo;