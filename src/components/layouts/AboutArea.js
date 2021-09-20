import React, {Component} from "react";
import {Link} from "react-router-dom";

class AboutArea extends Component {
    render() {
        return (
            <section className="about-area bg-grey pd-top-98 pd-bottom-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-wrap">
                                <h2>Who We Are</h2>
                                <p>Extremity direction existence as dashwoods do up. Securing marianne led welcomed
                                    offended but offering six raptures.</p>
                                <p>Ever man are put down his very. And marry may table him avoid. Hard sell it were into
                                    parties of assured to me windows. </p>
                                <p>In to am attended desirous raptures declared diverted confined at. Collected
                                    instantly remaining up certainly to necessary as. Over walk dull into son boy door
                                    went new. At or happiness commanded daughters as. Is handsome an declared at
                                    received.</p>
                                <Link className="btn btn-base initiate-scripts" to={'/'}>Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-end">
                            <div className="thumb text-md-right">
                                <img src={process.env.PUBLIC_URL + '/assets/img/about/1.png'} alt="img" />
                                <div className="date">
                                    <h1>12</h1>
                                    <h4>YEARS</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutArea;