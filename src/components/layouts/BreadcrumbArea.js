import React, {Component} from "react";
import {Link} from "react-router-dom";

class BreadcrumbArea extends Component {
    render() {
        return (
            <div className="breadcrumb-area"  style={{backgroundImage: "url(" + this.props.image + ")"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner">
                                <div className="section-title text-center">
                                    <h1 className="page-title">{this.props.title}</h1>
                                    <ul className="page-list">
                                        <li><Link className="initiate-scripts" to={'/'}>Home</Link></li>
                                        <li>{this.props.title}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BreadcrumbArea;