import React from "react";
import styles from "./classes.module.scss";
import Card from "../common/Card";

const FreeClasses = () => {
  const data = [
    {
      src: "https://placehold.co/400",
      title: "What's coding?",
      desc: "Beginner friendly if you're first time trying to learn code.",
      link: "/our-class/game-dev",
      beforePrice: "299.000",
      afterPrice: "",
    },
    {
      src: "https://placehold.co/400",
      title: "Basic website!",
      desc: "Let's create your first website and understand the basic of website!",
      link: "/our-class/web-dev",
      beforePrice: "299.000",
      afterPrice: "",
    },
    {
      src: "https://placehold.co/400",
      title: "Python is fun!",
      desc: "Python code is the most beginner friendly programming language. Let’s learn it!",
      link: "/our-class/py-dev",
      beforePrice: "299.000",
      afterPrice: "",
    },
  ];

  return (
    <div>
      <div className={`${styles.container}`}>
        <div className={`${styles.section_body} container py-5`}>
          <h1 className={`header_title fw-bold mb-4`}>Free online classes</h1>
          <div className={`${styles.section_card} mt-3 d-flex pb-3`}>
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
      </div>
    </div>
  );
};

export default FreeClasses;
