import { ModalContext } from "@/context/ModalContext";
import React, { useContext, useEffect, useState } from "react";
import styles from "./modal.module.scss";

const data = [
  {
    title: "Kiddo Developer",
    about:
      "Your kids will learn basic and fundamental of coding by using Game-based learning.",
    curriculums: [
      {
        month: 1,
        desc: "List and sequencing game",
      },
      {
        month: 2,
        desc: "Looping and function game",
      },
      {
        month: 3,
        desc: "Problem Solving I",
      },
      {
        month: 4,
        desc: "Coding with Minecraft",
      },
      {
        month: 5,
        desc: "Fundamental Scratch",
      },
      {
        month: 6,
        desc: "Final project and exam",
      },
    ],
  },

  {
    title: "Junior Developer",
    about:
      "Kids will learn to create their own games using block-based programming method.",
    curriculums: [
      {
        month: 1,
        desc: "Problem Solving II",
      },
      {
        month: 2,
        desc: "Fundamental of Scratch",
      },
      {
        month: 3,
        desc: "Scratch game project (basic)",
      },
      {
        month: 4,
        desc: "Scratch game project (advance)",
      },
      {
        month: 5,
        desc: "Build Android Application",
      },
      {
        month: 6,
        desc: "Final project and exam",
      },
    ],
  },

  {
    title: "Senior Developer",
    about: "Kids will get their first experience in writing lines of code, and directly build and present their projects.",
    curriculums: [
      {
        month: 1,
        desc: "Problem Solving III",
      },
      {
        month: 2,
        desc: "Build your first website",
      },
      {
        month: 3,
        desc: "Styling your website",
      },
      {
        month: 4,
        desc: "Interaction with website",
      },
      {
        month: 5,
        desc: "Build web-based games",
      },
      {
        month: 6,
        desc: "Final project and exam",
      },
    ],
  },
];

const Modal = () => {
  const c = useContext(ModalContext);
  const [dataModal, setDataModal] = useState(data);

  useEffect(() => {
    if (c.data != undefined) {
      setDataModal(data.filter((d) => d.title.match(c.data.title)));
    }

    console.log(dataModal);
  }, [c.data]);

  return (
    <div
      className={`${styles.modal_container} modal fade`}
      id="cardModal"
      tabIndex="-1"
      aria-labelledby="cardModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1
              className={`${styles.modal_header_title} header_title fw-bold m-0`}
              id="exampleModalLabel"
            >
              {c.data != undefined && c.data.title}
            </h1>
            <button
              type="button"
              className={`${styles.btn_close} btn-close`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className={`${styles.modal_body} modal-body`}>
            <div className={`${styles.modal_card_container}`}>
              <div>
                <h1 className={`${styles.card_title} fw-bold m-0 mb-2`}>
                  What'll you learn?
                </h1>
                <p>{dataModal.map((d) => d.about)}</p>
              </div>

              <div>
                <h1 className={`${styles.card_title} fw-bold mb-2`}>Learning journey</h1>

                {dataModal.map((val) =>
                  val.curriculums.map((curriculum, index) => (
                    <div
                      key={index}
                      className={`${styles.curriculum_card} mb-3`}
                    >
                      <div className={`${styles.curriculum_card_order} me-3`}>
                        <h1 className="m-0 fw-bold">{index + 1}</h1>
                      </div>
                      <div>
                        <h1 className={`${styles.card_title} fw-bold`}>
                          Month {curriculum.month}
                        </h1>
                        <p className="m-0">{curriculum.desc}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
