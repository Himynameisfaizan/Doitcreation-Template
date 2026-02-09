import pinterest from "../../../public/assets/img/icon/pinterest-white.svg";
import Image from "next/image";
import Link from "next/link";

const FooterSocial = () => {
  return (
    <>
      <div className="footer-social-icon-link">
        <li>
          <Link href="https://www.instagram.com/doitcreation/" target="_blank">
            <i className="ri-instagram-line"></i>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/company/doitcreation/posts/?feedView=all"
            target="_blank"
          >
            <i className="fab fa-linkedin-in" />
          </Link>
        </li>
        <li>
          <Link href="https://in.pinterest.com/doitcreation/" target="_blank">
            <Image src={pinterest} style={{height:'40px', width:'40px'}} alt="pinterest" />
          </Link>
        </li>
        <li>
          <Link href="https://www.behance.net/doitcreation" target="_blank">
            <i className="ri-behance-line"></i>
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/doitcreation/" target="_blank">
            <i className="fab fa-facebook-f" />
          </Link>
        </li>
        <li>
          <Link href="https://dribbble.com/doitcreation" target="_blank">
            <i className="ri-dribbble-fill"></i>
          </Link>
        </li>
        <li>
          <Link href="https://x.com/doitcreation" target="_blank">
            <i className="ri-twitter-x-fill"></i>
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/@doitcreation" target="_blank">
            <i className="ri-youtube-line"></i>
          </Link>
        </li>
      </div>
    </>
  );
};

export default FooterSocial;
