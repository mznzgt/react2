import React, {Component} from "react";
import NavigationOne from "./layouts/NavigationOne";
import BannerOne from "./layouts/BannerOne";
import ExplorePropertyArea from "./layouts/ExplorePropertyArea";
import TopPropertyArea from "./layouts/TopPropertyArea";
import RecentPropertyArea from "./layouts/RecentPropertyArea";
import WcuAreaOne from "./layouts/WcuAreaOne";
import AgentArea from "./layouts/AgentArea";
import TestimonialArea from "./layouts/TestimonialArea";
import PartnerArea from "./layouts/PartnerArea";
import Footer from "./layouts/Footer";
import FooterBottom from "./layouts/FooterBottom";
import BackToTop from "./layouts/BackToTop";

class HomeOne extends Component {
    render() {
        return (
            <>
                <NavigationOne />
                <BannerOne />
                <ExplorePropertyArea />
                <TopPropertyArea />
                <RecentPropertyArea />
                <WcuAreaOne />
                <AgentArea />
                <TestimonialArea />
                <PartnerArea />
                <Footer />
                <FooterBottom />
                <BackToTop />
            </>
        );
    }
}

export default HomeOne;