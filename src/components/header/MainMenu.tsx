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
              <Link href="#">Graphic Design</Link>
            </li>
            <li>
              <Link href="#">Web Design & Devlepment</Link>
            </li>
            <li>
              <Link href="#">Digital Marketing</Link>
            </li>
            <li>
              <Link href="#">Logo Design</Link>
            </li>
            <li>
              <Link href="#">Brand Name Suggestion</Link>
            </li>

          </ul>
        </li>

        <li className="dropdown">
          <Link href="/portfolio">Portfolio</Link>
        </li>

        <li>
          <Link href="/about-us">About</Link>
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
