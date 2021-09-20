import React, {Component} from "react";
import TopBarTwo from "./layouts/TopBarTwo";
import NavigationThree from "./layouts/NavigationThree";
import BannerThree from "./layouts/BannerThree";
import OptionArea from "./layouts/OptionArea";
import TopPropertyArea from "./layouts/TopPropertyArea";
import HelpingArea from "./layouts/HelpingArea";
import RecentPropertyArea from "./layouts/RecentPropertyArea";
import TestimonialArea from "./layouts/TestimonialArea";
import PartnerArea from "./layouts/PartnerArea";
import AboutArea from "./layouts/AboutArea";
import ExplorePropertyArea from "./layouts/ExplorePropertyArea";
import BlogArea from "./layouts/BlogArea";
import Footer from "./layouts/Footer";
import FooterBottom from "./layouts/FooterBottom";
import BackToTop from "./layouts/BackToTop";

class HomeThree extends Component {
    render() {
        return (
            <>
                <TopBarTwo />
                <NavigationThree />
                <BannerThree />
                <OptionArea />
                <TopPropertyArea />
                <HelpingArea />
                <RecentPropertyArea />
                <TestimonialArea />
                <PartnerArea />
                <AboutArea />
                <ExplorePropertyArea />
                <BlogArea />
                <Footer />
                <FooterBottom />
                <BackToTop />
            </>
        );
    }
}

export default HomeThree;