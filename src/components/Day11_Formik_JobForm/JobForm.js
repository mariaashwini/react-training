import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./JobForm.css";

export default function JobForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="form-container">
      <h2>Add New Job</h2>
      <Formik
        initialValues={{
          title: "",
          company: "",
          location: "",
          status: "pending",
          description: "",
          isRemote: false,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.title) errors.title = "Job title required";
          if (!values.company) errors.company = "Company required";
          if (!values.location) errors.location = "Location required";
          if (!values.description) errors.description = "Description required";

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          console.log("Submitted: ", values);
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 3000);
          resetForm();
        }}
      >
        <Form>
          <label>Title</label>
          <Field type="text" name="title" placeholder="e.g. React Developer" />
          <ErrorMessage name="title" component="div" className="error" />

          <label>Company</label>
          <Field type="text" name="company" placeholder="e.g. Google" />
          <ErrorMessage name="company" component="div" className="error" />

          <label>Description</label>
          <Field as="textarea" name="description" rows="4" cols="20" />
          <ErrorMessage name="description" component="div" className="error" />

          <label>Location</label>
          <Field type="text" name="location" placeholder="e.g. Chennai" />
          <ErrorMessage name="location" component="div" className="error" />

          <label>Status</label>
          <Field name="status" as="select">
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
            <option value="interview">Interview</option>
          </Field>

          <div className="checkbox-container">
            <Field type="checkbox" name="isRemote" />
            <label htmlFor="isRemote">Remote Job</label>
          </div>
          <ErrorMessage name="isRemote" component="div" className="error" />

          <button type="submit">Add Job</button>
          {submitted && <p className="success">✅ Job Added</p>}
        </Form>
      </Formik>
    </div>
  );
}
