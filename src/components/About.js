import React, {Component} from "react";
import Section from "./layouts/Section";
import WcuAreaOne from "./layouts/WcuAreaOne";
import TestimonialArea from "./layouts/TestimonialArea";
import PartnerArea from "./layouts/PartnerArea";

class About extends Component {
    render() {
        return (
            <Section title={'About Us'} breadcrumbBackground={'assets/img/banner/4.png'}>
                <section className="about-area pd-top-98 pd-bottom-110">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 align-self-center">
                                <div className="about-wrap">
                                    <h2>Who We Are</h2>
                                    <p>Extremity direction existence as dashwoods do up. Securing marianne led welcomed
                                        offended but offering six raptures.</p>
                                    <p>Ever man are put down his very. And marry may table him avoid. Hard sell it were
                                        into parties of assured to me windows. </p>
                                    <p>In to am attended desirous raptures declared diverted confined at. Collected
                                        instantly remaining up certainly to necessary as. Over walk dull into son boy
                                        door went new. At or happiness commanded daughters as. Is handsome an declared
                                        at received.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-end">
                                <div className="thumb text-md-right">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/about/1.png'} alt="img" />
                                    <div className="date">
                                        <h2 className="mb-0">12</h2>
                                        <h4>YEARS</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Wcu Area Imported from Layouts */}
                <WcuAreaOne />

                <section className="about-area-2 pd-top-98 pd-bottom-110">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 align-self-end">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/about/01.png'} alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center">
                                <div className="about-wrap">
                                    <h2>At Property <br /> Real Estate Company</h2>
                                    <p>Extremity direction existence as dashwoods do up. Securing marianne led welcomed
                                        offended but offering six raptures.</p>
                                    <p>Collected instantly remaining up certainly to necessary as. Over walk dull into
                                        son boy door went new. At or happiness commanded daughters as. Is handsome an
                                        declared at received. </p>
                                    <div className="clearfix">
                                        <ul>
                                            <li><i className="fas fa-check" />Help sellers get the most for their properties.</li>
                                            <li><i className="fas fa-check" />Help sellers price their properties fairly.</li>
                                            <li><i className="fas fa-check" />Help buyers find the property that fits their needs.</li>
                                            <li><i className="fas fa-check" />Help buyers avoid paying by strategically negotiating purchase.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonial Area Imported from Layouts */}
                <TestimonialArea />

                {/* Partner Area Imported from Layouts */}
                <PartnerArea />
            </Section>
        );
    }
}

export default About;