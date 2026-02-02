import SocialShareV3 from '../social/SocialShareV3';
import Link from 'next/link';
import Image from 'next/image';
import HeaderNewsLetter from './HeaderNewsLetter';
import logoLight from '../../../public/assets/img/LOgo-PNG.png';

interface SidebarInfoProps {
    openInfoBar: () => void;
    isInfoOpen: boolean;
    closeInfoBar: () => void;
}

const SidebarInfo = ({ openInfoBar, isInfoOpen, closeInfoBar }: SidebarInfoProps) => {
    return (
        <>
            <div className="attr-right">
                <div className="attr-nav flex">
                    <ul>
                        <li className="side-menu">
                            <Link href="#" scroll={false} onClick={openInfoBar}>
                                <span className="bar-1" />
                                <span className="bar-2" />
                                <span className="bar-3" />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={`side ${isInfoOpen ? "on" : ""}`}>
                    <Link href="#" scroll={false} className="close-side" onClick={closeInfoBar}><i className="fa fa-times"></i></Link>
                    <div className="top">
                        <div className="widget">
                            <div className="logo">
                                <Image src={logoLight} style={{width: '330px', height: "auto", objectFit: "cover"}} alt="Logo" />
                            </div>
                        </div>
                        <div className="widget address">
                            <div>
                                <ul>
                                    <li>
                                        <div className="content">
                                            <p>Address</p>
                                            <strong>C - 1, 132, C Block, Kailash Hills, Nangloi, New Delhi, Delhi 110086</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="content">
                                            <p>Email</p>
                                            <strong><a href='mailto:support@doitcreation.com'>support@doitcreation.com</a></strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="content">
                                            <p>Contact</p>
                                            <a href="tel:9560237516"><strong>+91 9560237516</strong></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="widget newsletter">
                            <h4 className="title">Get Subscribed!</h4>
                            <HeaderNewsLetter />
                        </div>
                        <div className="widget social">
                            <ul className="link">
                                <SocialShareV3 />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarInfo;