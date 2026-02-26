'use client'
import Link from "next/link";
import logo from "../../../../public/assets/img/LOgo-PNG.png";
import Image from "next/image";
import { usePathname } from "next/navigation";


const AsideLinks = () => {
  const pathname = usePathname();
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
              <li className={pathname.startsWith('/admin/home/') ? 'active' : ''}>
                <i className="ri-home-4-line"></i> Home
              </li>
            </Link>
            <Link href="/admin/addportfolio">
              <li className={pathname.startsWith("/admin/addportfolio/") ? 'active' : ''}>
                <i className="ri-gallery-view"></i> Portfolio
              </li>
            </Link>
            <Link href="/admin/testmonial">
              <li className={pathname.startsWith('/admin/testmonial/') ? 'active' : ''}>
                <i className="ri-feedback-line"></i> Testmonials
              </li>
            </Link>
            <Link href="/admin/brandlogo">
              <li className={pathname.startsWith('/admin/brandlogo/') ? 'active' : ''}>
                <i className="ri-star-line"></i> Brand Logo
              </li>
            </Link>
            <Link href="/admin/adduser">
              <li className={pathname.startsWith('/admin/adduser/') ? 'active' : ''}>
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
