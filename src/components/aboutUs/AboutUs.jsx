import React from "react";
import styles from "./aboutus.module.scss";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <div className={`container py-5`}>
        <h1 className={`header_title fw-bold mb-4`}>About us</h1>
        <div>
          <p>
            Hi parents, we are a coding course for kids that will help your kids
            learn coding in a fun way. Our goal is to make your kids love coding
            and provide the best learning sessions for your kids. Our mentor
            have been teaching coding for kids around the world for more than 5
            years.
          </p>

          <p>Our students are from these schools:</p>

          <div className={styles.collaborators_container}>
            <div
              className={`position-relative ${styles.section_img_container}`}
            >
              <Image fill sizes="100%" src={`/school/cbs.png`} alt="CBS" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
