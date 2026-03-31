"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import banner1 from "../../../public/assets/img/banner-img.webp";

interface DataType {
  navbarPlacement: string;
  toggleSubMenu: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MainMenu = ({ navbarPlacement, toggleSubMenu }: DataType) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ul
        className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`}
        data-in="fadeInDown"
        data-out="fadeOutUp"
      >
        <li className="dropdown megamenu-fw megamenu-style-two column-three">
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about-us">About</Link>
        </li>

        {/* <li>
          <Link href="/logo-design">Logo Design</Link>
        </li> */}

        <li className="dropdown">
          <Link
            href="#"
            className="dropdown-toggle"
            data-toggle="dropdown"
            onClick={toggleSubMenu}
          >
            Services
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link href="/logo-design">Logo Design</Link>
            </li>
            <li>
              <Link href="/packaging-design">Packaging Design</Link>
            </li>
            <li>
              <Link href="/website-design">Website Design</Link>
            </li>
            <li>
              <Link href="/logo-trademark">Logo Trademark</Link>
            </li>
            <li>
              <Link href="/brand-name">Brand Name Suggestion</Link>
            </li>
            <li>
              <Link href="/social-media-marketing">Social Media Marketing</Link>
            </li>
            <li>
              <Link href="/seo">SEO</Link>
            </li>
            <li>
              <Link href="/app-development">App Development</Link>
            </li>
            <li>
              <Link href="/video-shoot">Video & Shoot Service</Link>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <Link href="/portfolio">Portfolio</Link>
        </li>

        <li className="dropdown">
          <Link href="/brandassest">Brand assest</Link>
        </li>

        <li>
          <Link href="/contact-us">contact</Link>
        </li>
      </ul>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="35mvh-2oII8"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default MainMenu;
