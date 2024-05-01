import React from "react";
import styles from "./accordion.module.scss";

const data = [
  {
    title: "Will the class be held offline or online?",
    body: "Currently, we only offer online classes with flexible times. Coding classes will be conducted through Google Meet.",
  },
  {
    title:
      "What do parents need to prepare for their children taking online courses?",
    body: "Laptop with webcam,  stable internet connection, and Google Mail (Gmail) account.",
  },
  {
    title: "I still not sure, what class is suitable for my child?",
    body: "Don't worry, parents, you can have a free consultation with our student advisors! We are happy to help parents find suitable classes for your children.",
  },
  {
    title: "Could I request class schedule for my child?",
    body: "Yes, you can, Parents. You can set up a schedule with our student advisors! We are happy to help you find a schedule that works for your child.",
  },
];

const Accordion = () => {
  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      {data.map((v, index) => (
        <div
          key={index}
          className={`accordion-item border-0 mb-3 p-2 ${styles.item}`}
        >
          <h2 className="accordion-header">
            <button
              className={`accordion-button fw-bold ${styles.header_button} ${
                index != 0 && "collapsed"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#panelsStayOpen-${index}`}
              aria-expanded={`${index == 0 ? "true" : "false"}`}
              aria-controls={`panelsStayOpen-${index}`}
            >
              {v.title}
            </button>
          </h2>

          <div
            id={`panelsStayOpen-${index}`}
            className={`accordion-collapse border-0 collapse ${
              index == 0 && "show"
            }`}
          >
            <div className={`accordion-body ${styles.body}`}>{`> ${v.body}`}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
