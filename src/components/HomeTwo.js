import React, {Component} from "react";
import TopBarOne from "./layouts/TopBarOne";
import NavigationTwo from "./layouts/NavigationTwo";
import BannerTwo from "./layouts/BannerTwo";
import RecentPropertyArea from "./layouts/RecentPropertyArea";
import HelpingArea from "./layouts/HelpingArea";
import TopPropertyArea from "./layouts/TopPropertyArea";
import WcuAreaTwo from "./layouts/WcuAreaTwo";
import ExplorePropertyArea from "./layouts/ExplorePropertyArea";
import TestimonialArea from "./layouts/TestimonialArea";
import PartnerArea from "./layouts/PartnerArea";
import Footer from "./layouts/Footer";
import FooterBottom from "./layouts/FooterBottom";
import BackToTop from "./layouts/BackToTop";

class HomeTwo extends Component {
    render() {
        return (
            <>
                <TopBarOne />
                <NavigationTwo />
                <BannerTwo />
                <RecentPropertyArea />
                <HelpingArea />
                <TopPropertyArea />
                <WcuAreaTwo />
                <ExplorePropertyArea />
                <TestimonialArea />
                <PartnerArea />
                <Footer />
                <FooterBottom />
                <BackToTop />
            </>
        );
    }
}

export default HomeTwo;