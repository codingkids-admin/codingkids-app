import React from "react";
import styles from "./contactus.module.scss";
import Card from "./Card";

const ContactUs = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.section_body} container py-5`}>
        <h1 className={`header_title fw-bold mb-4`}>Live chat with us!</h1>
        <div className={`${styles.contact_container}`}>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
