import React from "react";
import styles from "./classes.module.scss";
import Card from "../common/Card";

const Classes = () => {
  const data = [
    {
      src: "https://placehold.co/400",
      title: "Game Developer",
      desc: "Kids will learn basic programming and be able to create their own games.",
      link: "/our-class/game-dev",
      beforePrice: "399.000",
      afterPrice: "275.000",
    },
    {
      src: "https://placehold.co/400",
      title: "Web Developer",
      desc: "Kids will learn how to create a website according to their creativity.",
      link: "/our-class/web-dev",
      beforePrice: "399.000",
      afterPrice: "275.000",
    },
    {
      src: "https://placehold.co/400",
      title: "Python Developer",
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
        <div className={`${styles.section_card} mt-3 d-flex gap-5 pb-3`}>
          {data.map((v, index) => (
            <Card
              key={index}
              afterPrice={v.afterPrice}
              beforePrice={v.beforePrice}
              desc={v.desc}
              link={v.link}
              src={v.src}
              title={v.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
