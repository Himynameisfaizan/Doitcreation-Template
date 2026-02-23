import Link from "next/link";
import logo from "../../../../public/assets/img/LOgo-PNG.png";
import Image from "next/image";

const AsideLinks = () => {
  return (
    <>
      <aside className="left-side">
        <div className="">
          <Link href="/">
            <Image
              src={logo}
              style={{
                width: "330px",
                height: "auto",
                objectFit: "cover",
              }}
              className="logo logo-display"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="dashboard-li-links">
          <ul>
            <Link href="/admin/home">
              <li>
                <i className="ri-home-4-line"></i> Home
              </li>
            </Link>
            <Link href="/admin/addportfolio">
              <li>
                <i className="ri-gallery-view"></i> Portfolio
              </li>
            </Link>
            <Link href="/admin/testmonial">
              <li>
                <i className="ri-feedback-line"></i> Testmonials
              </li>
            </Link>
            <Link href="/admin/brandlogo">
              <li>
                <i className="ri-star-line"></i> Brand Logo
              </li>
            </Link>
            <Link href="/admin/adduser">
              <li>
                <i className="ri-user-3-line"></i> Users
              </li>
            </Link>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AsideLinks;
