import React, {Component} from "react";
import TopBarTwo from "./TopBarTwo";
import NavigationThree from "./NavigationThree";
import BreadcrumbArea from "./BreadcrumbArea";
import Footer from "./Footer";
import FooterBottom from "./FooterBottom";
import BackToTop from "./BackToTop";

class Section extends Component {
    render() {
        return (
            <>
                <TopBarTwo />
                <NavigationThree />
                <BreadcrumbArea title={this.props.title} image={this.props.breadcrumbBackground} />
                {this.props.children}
                <Footer />
                <FooterBottom />
                <BackToTop />
            </>
        );
    }
}

export default Section;