import React from "react";
import styles from "./faq.module.scss";
import Accordion from "../common/Accordion";

const Faq = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.section_body} container py-5`}>
        <h1 className={`header_title fw-bold mb-4`}>Frequently asked question</h1>
        <Accordion />
      </div>
    </div>
  );
};

export default Faq;
