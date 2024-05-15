import React from "react";
import styles from "./aboutus.module.scss";
import Image from "next/image";

const data = [
  {
    alt: "Citra Bangsa School",
    img: "cbs.webp",
  },
  {
    alt: "Jakarta Intercultural School",
    img: "jis.webp",
  },
  {
    alt: "Singapore International School",
    img: "sis.webp",
  },
  {
    alt: "British School Jakarta",
    img: "bsj.webp",
  },
];

const AboutUs = () => {
  return (
    <div>
      <div id="about-us" className={`container py-5`}>
        <h1 className={`header_title fw-bold mb-4`}>
          About us
        </h1>
        <div>
          <p className="text-center text-md-start text-lg-start px-3 px-lg-0 px-md-0">
            Hi parents, we are a coding course for kids that will help your kids
            learn coding in a fun way. Our goal is to make your kids love coding
            and provide the best learning sessions for your kids. Our mentor
            have been teaching coding for kids around the world for more than 5
            years.
          </p>

          <p className="text-center text-md-start text-lg-start">
            Our students are from these schools:
          </p>

          <div className={styles.collaborators_container}>
            {data.map((value, index) => (
              <div
                key={index}
                className={`position-relative ${styles.section_img_container}`}
              >
                <Image
                  rel="preload"
                  priority={true}
                  src={`/school/${value.img}`}
                  alt={value.alt}
                  fill
                  sizes="100%"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
