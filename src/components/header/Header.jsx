import React from "react";
import styles from "../../components/header/header.module.scss";

const tags = [
  "Project based learning",
  "Well-curriculum",
  "Learning progression",
];

const Header = () => {
  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.header_body} container align-items-center d-flex flex-column-reverse flex-md-row justify-content-between`}
      >
        <div
          className={`${styles.header_title_container} gap-2 d-flex flex-column justify-content-between`}
        >
          <h1 className={`${styles.header_title} m-0 fw-bold my-2 m-lg-0`}>
            We don&apos;t teach coding,
            <br />
            We make <span>kids love coding.</span>
          </h1>
          <div className={`${styles.header_tags_container} d-flex gap-2`}>
            {tags.map((tag, index) => (
              <h2 key={index} className={`${styles.header_tag} py-2 px-3`}>
                {tag}
              </h2>
            ))}
          </div>
        </div>

        <div className={`${styles.header_img_container}`}>
          <video
            playsInline
            autoPlay
            loop
            muted
            src="/header.mp4"
            type="video/mp4"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Header;
