"use client";
import React, { useState } from "react";
import styles from "./card.module.scss";
import { AUTH } from "../../utilities/Constant";
import sendWhatsapp from "@/utilities/sendWhatsapp";

const Card = () => {
  const [form, setForm] = useState({
    kidsFullName: "",
    parentFullName: "",
    relationship: "mommy",
    whatsapp: "",
  });

  return (
    <div className={`${styles.card_container} p-4`}>
      <form className="d-flex flex-column gap-4">
        <div>
          <label className="d-block" htmlFor="kids_name">
            Kids full name
          </label>
          <input
            onChange={(ev) =>
              setForm({
                ...form,
                kidsFullName: ev.target.value,
              })
            }
            className={`${styles.card_input}`}
            type="text"
            name="kids_name"
            id="kids_name"
            placeholder="Your kids full name"
            value={form.kidsFullName}
            required
          />
        </div>

        <div>
          <label className="d-block" htmlFor="parent_name">
            Parent full name
          </label>
          <input
            onChange={(ev) =>
              setForm({
                ...form,
                parentFullName: ev.target.value,
              })
            }
            className={`${styles.card_input}`}
            type="text"
            name="parent_name"
            id="parent_name"
            placeholder="Parent full name"
            value={form.parentFullName}
          />
        </div>

        <div>
          <label className="d-block" htmlFor="relationship">
            Relationship with kid
          </label>
          <div className="d-flex gap-3">
            <span className={`${styles.card_relationship}`}>
              <input
                onChange={(ev) =>
                  setForm({
                    ...form,
                    relationship: "mommy",
                  })
                }
                type="radio"
                id="relationship_mommy"
                name="relationship"
                value="mommy"
                className="me-1"
                defaultChecked
              />
              <label htmlFor="relationship_mommy">Mommy</label>
            </span>

            <span className={`${styles.card_relationship}`}>
              <input
                onChange={(ev) =>
                  setForm({
                    ...form,
                    relationship: "daddy",
                  })
                }
                type="radio"
                id="relationship_daddy"
                name="relationship"
                value="daddy"
                className="me-1"
              />
              <label htmlFor="relationship_daddy">Daddy</label>
            </span>
          </div>
        </div>

        <div>
          <label className="d-block" htmlFor="whatsapp">
            Whatsapp
          </label>
          <input
            required
            onChange={(ev) => {
              setForm({
                ...form,
                whatsapp: ev.target.value,
              });
            }}
            className={`${
              form.whatsapp.length > 15
                ? styles.card_input_error
                : styles.card_input
            }`}
            type="number"
            name="whatsapp"
            id="whatsapp"
            placeholder="Whatsapp number"
            value={form.whatsapp}
          />
          {form.whatsapp.length > 15 && (
            <p className={`${styles.error_message} mt-1`}>
              Phone number can&apos;t be greater that 15
            </p>
          )}
        </div>

        <div>
          <button
            style={{
              opacity:
                form.whatsapp.length > 15 ||
                !form.whatsapp ||
                !form.kidsFullName ||
                !form.parentFullName
                  ? "0.5"
                  : "1",
            }}
            onClick={(e) => {
              e.preventDefault();

              if (
                form.whatsapp.length <= 15 &&
                form.whatsapp &&
                form.kidsFullName &&
                form.parentFullName
              ) {
                fetch("https://services.codingkids.id/mail", {
                  method: "POST",
                  headers: {
                    Authorization: AUTH,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    message: `<div>
                  <h3>Submitted at ${new Date()}</h3>
                  <h4>Kids full name: [ ${form.kidsFullName} ]</h4> 
                  <h4>Parent full name: [ ${form.parentFullName} ]</h4> 
                  <h4>Relationship: [ ${form.relationship} ]</h4>
                  <h4>Whatsapp : [ ${form.whatsapp} ]</h4>
                  </div>`,
                  }),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    setForm({
                      ...form,
                      kidsFullName: "",
                      parentFullName: "",
                      whatsapp: "",
                    });
                  });
                window.open(
                  sendWhatsapp(
                    `Hi Mr, saya ingin consultasi untuk les coding anak saya\nNama Anak: ${form.kidsFullName}\nHubungan dengan anak: ${form.relationship}`
                  ),
                  "_blank"
                );
              }
            }}
            className={`btn-primary ${styles.btn_form}`}
          >
            Start consulting!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Card;
