import React from "react";
import styles from "./information.module.scss";
import Carousel from "../common/Carousel";

const Information = () => {
  return (
    <section className={`${styles.container} mb-5`}>
      <div
        className={`${styles.section_title_container} d-flex justify-content-center mt-4 mt-md-5`}
      >
        <h1 className={`secion_title py-2 px-3`}>
          Wall-of-information
        </h1>
      </div>

      <div
        className={`${styles.section_body} d-flex justify-content-center mt-3`}
      >
        <Carousel />
      </div>
    </section>
  );
};

export default Information;
