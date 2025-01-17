import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import './SubmissionForm.css';


const SubmissionForm = () => {
  const formik = useFormik({
    initialValues: {
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      productDetails: "",
      price: "",
      certification: null,
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("Company Name is required"),
      contactPerson: Yup.string().required("Contact Person is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
      productDetails: Yup.string().required("Product details are required"),
      price: Yup.number()
        .positive("Price must be positive")
        .required("Price is required"),
      certification: Yup.mixed().required("Certification is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      alert("Form submitted successfully!");
    },
  });

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>Submission Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            onChange={formik.handleChange}
            value={formik.values.companyName}
          />
          {formik.errors.companyName ? (
            <div style={{ color: "red" }}>{formik.errors.companyName}</div>
          ) : null}
        </label>
        <br />

        <label>
          Contact Person:
          <input
            type="text"
            name="contactPerson"
            onChange={formik.handleChange}
            value={formik.values.contactPerson}
          />
          {formik.errors.contactPerson ? (
            <div style={{ color: "red" }}>{formik.errors.contactPerson}</div>
          ) : null}
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </label>
        <br />

        <label>
          Phone:
          <input
            type="text"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.errors.phone ? (
            <div style={{ color: "red" }}>{formik.errors.phone}</div>
          ) : null}
        </label>
        <br />

        <label>
          Product Details:
          <textarea
            name="productDetails"
            onChange={formik.handleChange}
            value={formik.values.productDetails}
          />
          {formik.errors.productDetails ? (
            <div style={{ color: "red" }}>{formik.errors.productDetails}</div>
          ) : null}
        </label>
        <br />

        <label>
          Price:
          <input
            type="number"
            name="price"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.errors.price ? (
            <div style={{ color: "red" }}>{formik.errors.price}</div>
          ) : null}
        </label>
        <br />

        <label>
          Certification Document:
          <input
            type="file"
            name="certification"
            onChange={(event) => {
              formik.setFieldValue("certification", event.target.files[0]);
            }}
          />
          {formik.errors.certification ? (
            <div style={{ color: "red" }}>{formik.errors.certification}</div>
          ) : null}
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmissionForm;
