import React, {Component} from "react";

class TestimonialArea extends Component {
    render() {
        return (
            <section className="testimonial-area bg-grey pd-top-98 pd-bottom-110 text-center mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2 className="title">Client Review</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="testimonial-slider owl-carousel owl-theme">
                                <div className="item">
                                    <div className="testimonial-wrap">
                                        <h4 className="content">Whole every miles as tiled at seven or. Wished he entire
                                            esteem mr oh by. Possible bed you pleasure civility boy elegance ham. He
                                            prevent request by if in pleased.</h4>
                                        <div className="testimonial-details">
                                            <div className="thumb">
                                                <img src={process.env.PUBLIC_URL + '/assets/img/testimonial/1.png'} alt="img" />
                                            </div>
                                            <div className="media-body">
                                                <h6>Seller Agency</h6>
                                                <h5>Soren Davidson</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-wrap">
                                        <h4 className="content">Whole every miles as tiled at seven or. Wished he entire
                                            esteem mr oh by. Possible bed you pleasure civility boy elegance ham. He
                                            prevent request by if in pleased.</h4>
                                        <div className="testimonial-details">
                                            <div className="thumb">
                                                <img src={process.env.PUBLIC_URL + '/assets/img/testimonial/1.png'} alt="img" />
                                            </div>
                                            <div className="media-body">
                                                <h6>Seller Agency</h6>
                                                <h5>Soren Davidson</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-wrap">
                                        <h4 className="content">Whole every miles as tiled at seven or. Wished he entire
                                            esteem mr oh by. Possible bed you pleasure civility boy elegance ham. He
                                            prevent request by if in pleased.</h4>
                                        <div className="testimonial-details">
                                            <div className="thumb">
                                                <img src={process.env.PUBLIC_URL + '/assets/img/testimonial/1.png'} alt="img" />
                                            </div>
                                            <div className="media-body">
                                                <h6>Seller Agency</h6>
                                                <h5>Soren Davidson</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-wrap">
                                        <h4 className="content">Whole every miles as tiled at seven or. Wished he entire
                                            esteem mr oh by. Possible bed you pleasure civility boy elegance ham. He
                                            prevent request by if in pleased.</h4>
                                        <div className="testimonial-details">
                                            <div className="thumb">
                                                <img src={process.env.PUBLIC_URL + '/assets/img/testimonial/1.png'} alt="img" />
                                            </div>
                                            <div className="media-body">
                                                <h6>Seller Agency</h6>
                                                <h5>Soren Davidson</h5>
                                            </div>
                                        </div>
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

export default TestimonialArea;