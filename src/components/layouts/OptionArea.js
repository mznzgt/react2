import React, {Component} from "react";

class OptionArea extends Component {
    render() {
        return (
            <section className="option-area bg-grey">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4 col-sm-6">
                            <div className="single-option-wrap">
                                <h5>Buy a Home</h5>
                                <p>Suppose shyness say to say behaved esidence .</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="single-option-wrap">
                                <h5>Rent a Home</h5>
                                <p>Suppose shyness say to say behaved esidence .</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="single-option-wrap">
                                <h5>See Neighborhoods</h5>
                                <p>Suppose shyness say to say behaved esidence .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OptionArea;