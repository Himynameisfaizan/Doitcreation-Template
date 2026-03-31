import AboutV6 from "@/components/about/AboutV6"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import BreadHeader from "@/components/app-breadcrumb/BreadHeader"
import DarkClass from "@/components/classes/DarkClass"
import FunFactV1 from "@/components/fact/FunFactV1"
import FooterV1 from "@/components/footer/FooterV1"
import HeaderV1 from "@/components/header/HeaderV1"
import { HomeContact } from "@/components/homeContact/HomeContact"
import PartnerV2 from "@/components/partner/PartnerV2"
import { ProductCarousel } from "@/components/logoCarousel/ProductCarousel"
import {ServiceDetailsContent} from "@/components/app-service/ServiceDetailsContent"
import { ClientTestimonials } from "@/components/testimonials/ClientTestimonials"

const appDevelopment = () => {
    return(
        <>
            <HeaderV1/>
            <BreadHeader 
                title="APP DEVELOPMENT SERVICE"
                description="Transform Your Vision Into a Premium Digital Experience"
                />
            {/* <Breadcrumb title="About Us" breadCrumb="about-us"/> */}
            <ProductCarousel />
            {/* <AboutV6 sectionClass='default-padding'/> */}
            {/* <PartnerV2/> */}
            <ServiceDetailsContent />
            <FunFactV1 sectionClass='default-padding-bottom'/>
            <ClientTestimonials/>
            <HomeContact/>
            <FooterV1 />
            <DarkClass />
        </>
    )
}

export default appDevelopment