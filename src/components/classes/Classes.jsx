"use client";

import React, { Fragment } from "react";
import styles from "./classes.module.scss";
import Card from "../common/Card";
import Modal from "../common/Modal";

const Classes = () => {
  const data = [
    {
      id: "1",
      src: "https://placehold.co/400",
      title: "Kiddo Developer",
      desc: "Kids will learn problem solving using game-based learning method.",
      link: "/our-class/game-dev",
      beforePrice: "399.000",
      afterPrice: "275.000",
    },
    {
      id: "2",
      src: "https://placehold.co/400",
      title: "Junior Developer",
      desc: "Kids will learn to create their own games using block-based programming method.",
      link: "/our-class/web-dev",
      beforePrice: "399.000",
      afterPrice: "275.000",
    },
    {
      id: "3",
      src: "https://placehold.co/400",
      title: "Senior Developer",
      desc: "Kids will have their first experience in writing lines of code.",
      link: "/our-class/py-dev",
      beforePrice: "399.000",
      afterPrice: "275.000",
    },
  ];
  return (
    <section className={`${styles.container} bg-secondary mb-5`} id="our-class">
      <div className={`${styles.section_body} container py-5`}>
        <h1 className={`header_title fw-bold`}>Live coding classes</h1>
        <div className={`${styles.section_card} mt-3 d-flex pb-3`}>
          {data.map((v, index) => (
            <Fragment key={index}>
              <Card
                key={index}
                afterPrice={v.afterPrice}
                beforePrice={v.beforePrice}
                desc={v.desc}
                link={v.link}
                src={v.src}
                title={v.title}
                id={v.id}
              />
            </Fragment>
          ))}
          <Modal />
        </div>
      </div>
    </section>
  );
};

export default Classes;
