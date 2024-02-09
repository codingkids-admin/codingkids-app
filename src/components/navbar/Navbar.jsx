"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import Navlink from "./Navlink";
import Link from "next/link";
import useResponsive from "@/utilities/useResponsive";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const isMobile = useResponsive("sm");
  const [state, setState] = useState({
    isNavbarOpen: false,
  });

  const links = [
    {
      href: "/our-class",
      title: "Our class",
    },
    {
      href: "/fun-tips",
      title: "Fun tips",
    },
    {
      href: "/contact-us",
      title: "Contact us",
    },
  ];

  return (
    <nav className={`${styles.container} position-relative px-0`}>
      <div
        className={`${styles.nav_body} container w-100 d-flex justify-content-between align-items-center py-4 gap-4 gap-lg-0 px-4`}
      >
        <Link
          href={"/"}
          onClick={() => {
            setState({ isNavbarOpen: false });
          }}
          className={`${styles.nav_brand} d-flex gap-1 align-items-center text-decoration-none`}
        >
          <img src="/logo.svg" alt="Coding kids indonesia logo" />
          {isMobile && <p className="m-0">oding kids</p>}
        </Link>
        <ul
          className={`${styles.nav_link_container} ${
            isMobile && !state.isNavbarOpen
              ? styles.nav_link_close
              : styles.nav_link_open
          } m-0 d-flex flex-column flex-lg-row flex-md-row gap-2 gap-lg-5 align-items-center list-unstyled`}
        >
          {links.map(({ href, title }, index) => (
            <Navlink
              onClick={() => {
                setState({ isNavbarOpen: false });
              }}
              key={index}
              href={href}
              title={title}
            />
          ))}
        </ul>
        <div className={`${styles.nav_actions_container}`}>
          <button
            onClick={() => {
              setState({ isNavbarOpen: !state.isNavbarOpen });
            }}
            className={`${styles.nav_btn_primary} btn-primary`}
          >
            {isMobile ? <MenuIcon /> : "Join us!"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
