import Image from 'next/image';
import Link from 'next/link';
import NewsletterV2 from '../newsletter/NewsletterV2';
import FooterSocial from '../social/FooterSocial';
import logoLight from '../../../public/assets/img/LOgo-PNG.png'
import logo from '../../../public/assets/img/LOgo-PNG.png'

interface DataType {
    sectionClass?: string;
}

const FooterV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <footer className={`${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="f-items">
                        <div className="row">
                            <div className="col-lg-6 footer-item about pr-120 pr-md-15 pr-xs-15 pr-md-15 pr-xs-15">
                                <div className="top">
                                    <Image className="regular-img" src={logoLight} style={{width: '330px', height: "auto", objectFit: "cover"}}  alt="Image Not Found" />
                                    <Image className="light-img" src={logo} style={{width: '330px', height: "auto", objectFit: "cover"}}  alt="Image Not Found" />
                                </div>
                                <ul className="address-list">
                                    <li>
                                        <h4>New Delhi</h4>
                                        <p>
                                            C - 1, 132, C Block, Kailash Hills, Nangloi, New Delhi, Delhi 110086
                                        </p>
                                    </li>
                                </ul>
                                <NewsletterV2 />
                            </div>
                            <div className="col-lg-5 offset-lg-1 footer-item">
                                <h4 className="widget-title">Useful Link</h4>
                                <ul className="useful-link">
                                    <li><Link href="/portfolio">Portfolio</Link></li>
                                    <li><Link href="/contact-us">Contact</Link></li>
                                    <li><Link href="/terms-condition">Term & Conditions</Link></li>
                                    <li><Link href="/privacy-policy ">Privacy Policy</Link></li>
                                </ul>
                                <div className="footer-contact">
                                    <ul>
                                        <li>
                                            <a href="mailto:support@doitcreation.com">support@doitcreation.com</a>
                                        </li>
                                        <li>
                                            <a href="tel:9560237516">+91 9560237516</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="footer-social">
                                    <FooterSocial />
                                </ul>
                            </div>
                            <div className="col-lg-6 text-end">
                                <p>
                                    Copyright &copy; 2017 - 2026 Doitcreation. All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;