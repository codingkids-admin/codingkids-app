"use client";

import React, { Fragment } from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import sendWhatsapp from "@/utilities/sendWhatsapp";
import useResponsive from "@/utilities/useResponsive";
import { EmailOutlined, Facebook, Instagram } from "@mui/icons-material";

const data = [
  {
    title: "Instagram",
    icon: <Instagram />,
    url: "#",
  },
  {
    title: "Facebook",
    icon: <Facebook />,
    url: "#",
  },
  {
    title: "Email",
    icon: <EmailOutlined />,
    url: "#",
  },
];

const Footer = () => {
  const isMobile = useResponsive("sm");

  return (
    <div className={`${styles.container}`}>
      <div className="d-flex flex-column flex-lg-row flex-md-row gap-5 container py-5">
        <div
          className={`${isMobile ? "w-100" : "w-50"} d-flex flex-column gap-3`}
        >
          <div
            className={`d-flex align-items-center gap-2 ${styles.footer_logo_container}`}
          >
            <div className={`position-relative ${styles.footer_img_container}`}>
              <Image
                rel="preload"
                priority={true}
                src="/logo.svg"
                alt="Coding Kids Logo"
                fill
                sizes="100%"
              />
            </div>
            <h1 className={`${styles.footer_text_title} fw-bold`}>
              Coding kids!
            </h1>
          </div>
          <p className="m-0">
            We help your children to express and unlock their true potential in
            the digital world, with a structured curriculum and experienced
            coding mentors.
          </p>

          <div>
            <a
              href={sendWhatsapp(
                "Hello Koding Kids!\nNama saya: <masukan_nama_kamu>\nSaya tertarik dengan kelas-kelas di koding kids, boleh bantu saya dalam memilih kelas yang cocok untuk saya/anak saya?"
              )}
              target="_blank"
              role="button"
              className="text-center btn-primary text-decoration-none"
            >
              Contact us!
            </a>
          </div>
        </div>

        <div
          className={`gap-3 ${
            isMobile ? "w-100" : "w-75"
          } d-flex justify-content-md-end justify-content-lg-end justify-content-center`}
        >
          {data.map((v, i) => (
            <Fragment key={i}>
              <a href={v.url}>{v.icon}</a>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
