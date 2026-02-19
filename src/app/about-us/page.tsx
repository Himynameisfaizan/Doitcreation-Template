import AboutV6 from "@/components/about/AboutV6"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import BreadHeader from "@/components/breadcrumb/BreadHeader"
import DarkClass from "@/components/classes/DarkClass"
import FunFactV1 from "@/components/fact/FunFactV1"
import FooterV1 from "@/components/footer/FooterV1"
import HeaderV1 from "@/components/header/HeaderV1"
import PartnerV2 from "@/components/partner/PartnerV2"
import { ProductCarousel } from "@/components/productCarousel/ProductCarousel"

const AboutUsPage = () => {
    return(
        <>
            <HeaderV1/>
            <BreadHeader />
            {/* <Breadcrumb title="About Us" breadCrumb="about-us"/> */}
            <ProductCarousel />
            {/* <AboutV6 sectionClass='default-padding'/>
            <FunFactV1 sectionClass='default-padding-bottom'/>
            <PartnerV2/> */}
            <FooterV1 />
            <DarkClass />
        </>
    )
}

export default AboutUsPage