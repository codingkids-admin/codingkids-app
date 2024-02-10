import styles from "./card.module.scss";

import React from "react";
import Image from "next/image";

const Card = ({ src, title, desc, link, beforePrice, afterPrice }) => {
  return (
    <div className={`${styles.card_container}`}>
      <div className={`${styles.card_img_container} position-relative mb-3`}>
        <Image
          className="w-100"
          fill
          priority={true}
          sizes="100%"
          src={src}
          alt={title}
        />
      </div>
      <div className={`${styles.card_body_container} p-3`}>
        <h1 className={`${styles.card_title} fw-bold`}>{title}</h1>
        <p className={`${styles.card_desc}`}>{desc}</p>

        <div
          className={`${styles.card_price_container} d-flex align-items-center mb-3 justify-content-between`}
        >
          <p
            className={`${styles.card_before_price} text-decoration-line-through`}
          >
            Rp{beforePrice}
          </p>
          <p className={`${styles.card_after_price}`}>
            Rp{afterPrice}
            <span>/session</span>
          </p>
        </div>

        <button className="btn-primary w-100 py-3">Learn more!</button>
      </div>
    </div>
  );
};

export default Card;
