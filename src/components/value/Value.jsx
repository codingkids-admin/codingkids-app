import React from "react";
import styles from "./value.module.scss";
import Image from "next/image";

const Value = () => {
  const values = [
    {
      img: "Projects.svg",
      title: "Projects",
      desc: "New challenges in every session",
    },
    {
      img: "Language.svg",
      title: "Bilingual",
      desc: "Indonesia and English",
    },
    {
      img: "Mentor.svg",
      title: "1-1 Mentor",
      desc: "Professional and fun mentors",
    },
    {
      img: "Interaction.svg",
      title: "Interactions",
      desc: "Individual approach to students",
    },
    {
      img: "Certification.svg",
      title: "Certificate",
      desc: "Gives you proof of completion",
    },
  ];
  return (
    <div className={`${styles.container} mb-5 container`}>
      <div
        className={`${styles.section_title_container} d-flex justify-content-center mt-4 mt-md-5`}
      >
        <h1 className={`secion_title py-2 px-3 mb-5`}>How do we teach?</h1>
      </div>

      <div
        className={`${styles.section_body_container} d-flex flex-wrap gap-5 justify-content-center align-items-center`}
      >
        {values.map((v, index) => (
          <div
            key={index}
            className={`${styles.section_card} p-4 d-flex gap-4 flex-column justify-content-center align-items-center`}
          >
            <div
              key={index}
              className={`position-relative ${styles.section_img_container}`}
            >
              <Image rel="preload" fill sizes="100%" src={`/values/${v.img}`} alt={v.title} />
            </div>

            <div className={`${styles.section_desc} m-0 text-center`}>
              <h1 className="m-0">{v.title}</h1>
              <p className="m-0">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Value;
