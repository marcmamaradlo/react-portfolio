import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";

import SecondaryButton from "./buttons/SecondaryButton";
import LoaderSpinner from "./assets/loader-spinner";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [showLoaderSpinner, setShowLoaderSpinner] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    email: Yup.string()
      .required("This field is required")
      .email("This field is invalid"),
    message: Yup.string().required("This field is required").max(500),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (data) => {
      setShowLoaderSpinner(true);
      console.log(JSON.stringify(data, null, 2));
      emailjs
        .sendForm(
          "service_24szffq",
          "template_06bfi2p",
          form.current,
          "e04CtcKkAAwLfi5Wv"
        )
        .then(
          (result) => {
            console.log(result.text);
            setStatus("sent");
            formik.values.name = "";
            formik.values.email = "";
            setShowLoaderSpinner(false);
          },
          (error) => {
            console.log(error.text);
            setStatus("error");
          }
        );
    },
  });

  return (
    <div className="container" id="contact">
      <div className="contact">
        <h2>{`<Contact/>`}</h2>
        <div className="contact-text">
          <p>Hire me or collaborate, send me an email.</p>
        </div>
        <div className="contact-form-container">
          <form ref={form} onSubmit={formik.handleSubmit}>
            {status === "sending" && (
              <div style={{ color: "blue" }}>sending...</div>
            )}
            {status === "sent" && (
              <div style={{ color: "green" }}>Message sent!</div>
            )}
            {status === "error" && (
              <div style={{ color: "red" }}>Message failed to send.</div>
            )}
            <label>
              Name
              <span>
                {formik.errors.name && formik.touched.name
                  ? formik.errors.name
                  : null}
              </span>
            </label>
            <input
              name="name"
              type="text"
              className={
                // "form-control" +
                formik.errors.name && formik.touched.name ? " is-invalid" : ""
              }
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder="Mohammad Lee"
            />

            <label htmlFor="email">
              Email
              <span>
                {formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : null}
              </span>
            </label>
            <input
              name="email"
              type="email"
              className={
                formik.errors.email && formik.touched.email ? "is-invalid" : ""
              }
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="example@mail.com"
            />

            <label htmlFor="message">
              Message
              <span>
                {formik.errors.message && formik.touched.message
                  ? formik.errors.message
                  : null}
              </span>
            </label>
            <textarea
              name="message"
              rows={7}
              onChange={formik.handleChange}
              className={
                formik.errors.message && formik.touched.message
                  ? "is-invalid"
                  : ""
              }
              placeholder="Message"
            />
            <div className="">
              <SecondaryButton
                type={`submit`}
                style={`contact-button`}
                id={`submit-button`}
                text={`Submit`}
              />
            </div>
          </form>
        </div>
      </div>
      {showLoaderSpinner ? <LoaderSpinner /> : null}
    </div>
  );
};

export default Contact;
