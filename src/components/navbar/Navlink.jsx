import Link from "next/link";
import styles from "./Navbar.module.scss";
import React from "react";

const Navlink = ({ href, title, onClick }) => {
  return (
    <Link
      onClick={() => onClick()}
      href={href}
      className={`${styles.nav_link} text-center`}
    >
      {title}
    </Link>
  );
};

export default Navlink;
