"use client";

import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import Navlink from "./Navlink";
import Link from "next/link";
import useResponsive from "@/utilities/useResponsive";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Loading from "../common/Loading";
import sendWhatsapp from "@/utilities/sendWhatsapp";

const Navbar = () => {
  const isMobile = useResponsive("sm");
  const [isLoading, setIsLoading] = useState(true);
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
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <nav
      className={`${styles.container} ${
        state.isNavbarOpen
          ? styles.nav_container_open
          : styles.nav_container_close
      } px-0`}
    >
      {isLoading && <Loading />}
      <div
        className={`${isLoading && "d-none"} ${
          styles.nav_body
        } container w-100 d-flex justify-content-between align-items-center py-3 gap-4 gap-lg-0 px-4`}
      >
        <Link
          href={"/"}
          onClick={() => {
            setState({ isNavbarOpen: false });
          }}
          className={`${styles.nav_brand} d-flex gap-1 align-items-center text-decoration-none`}
        >
          <div className={`position-relative ${styles.nav_img_container}`}>
            <Image
              priority={true}
              src="/logo.svg"
              alt="Coding kids indonesia logo"
              fill
            />
          </div>
          {isMobile && <p className="m-0">oding kids</p>}
        </Link>
        <ul
          className={`${styles.nav_link_container} ${
            isMobile && !state.isNavbarOpen
              ? styles.nav_link_close
              : styles.nav_link_open
          } pb-4 pb-md-0 m-0 d-flex flex-column flex-lg-row flex-md-row gap-2 gap-lg-5 align-items-center list-unstyled`}
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
          {isMobile && (
            <a
              href={sendWhatsapp(
                "Hello Sir Koding Kids!\nNama saya: <masukan_nama_kamu>\nSaya tertarik dengan kelas-kelas di koding kids, boleh bantu saya dalam memilih kelas yang cocok untuk saya/anak saya?"
              )}
              target="_blank"
              onClick={() => {
                setState({ isNavbarOpen: !state.isNavbarOpen });
              }}
              className={`${styles.nav_btn_primary} text-decoration-none btn-primary`}
            >
              Join us!
            </a>
          )}
        </ul>
        <div className={`${styles.nav_actions_container}`}>
          <a
            href={
              isMobile
                ? "/"
                : sendWhatsapp(
                    "Hello Sir Koding Kids!\nNama saya: <masukan_nama_kamu>\nSaya tertarik dengan kelas-kelas di koding kids, boleh bantu saya dalam memilih kelas yang cocok untuk saya/anak saya?"
                  )
            }
            target="_blank"
            onClick={(ev) => {
              if (isMobile) {
                ev.preventDefault();
                setState({ isNavbarOpen: !state.isNavbarOpen });
              }
            }}
            className={`${styles.nav_btn_primary} text-decoration-none btn-primary`}
          >
            {isMobile ? <MenuIcon style={{ fill: "white" }} /> : "Join us!"}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
