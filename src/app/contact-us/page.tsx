import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import DarkClass from "@/components/classes/DarkClass";
import ContactV1 from "@/components/contact/ContactV1";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderV1 from "@/components/header/HeaderV1";
import ContactMap from "@/components/map/ContactMap";

const contactUsPage = () => {
    return(
        <>
            <HeaderV1/>
            <Breadcrumb title="Get in Touch" breadCrumb="contact-us"/>
            <ContactV1/>
            <ContactMap/>
            <DarkClass/>
            <FooterV1/>
        </>
    )
}

export default contactUsPage;