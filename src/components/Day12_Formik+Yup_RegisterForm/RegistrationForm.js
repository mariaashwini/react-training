import { ErrorMessage, Field, Form, Formik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import "./RegistrationForm.css";

const validationSchema = Yup.object({
  fullname: Yup.string()
    .min(3, "Name must be atleast 3 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="form-container">
      <h2>Register</h2>
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 3000);
          resetForm();
        }}
      >
        <Form>
          <label>Full Name</label>
          <Field type="text" name="fullname" className="formikInput" />
          <ErrorMessage name="fullname" className="error" component="div" />

          <label htmlFor="email">Email</label>
          <Field type="email" name="email" className="formikInput" />
          <ErrorMessage name="email" className="error" component="div" />

          <label htmlFor="password">Password</label>
          <Field type="password" name="password" className="formikInput" />
          <ErrorMessage name="password" className="error" component="div" />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field
            type="password"
            name="confirmPassword"
            className="formikInput"
          />
          <ErrorMessage
            name="confirmPassword"
            className="error"
            component="div"
          />

          <button type="submit">Register</button>
          {submitted && <p className="success">✅ Registered Successfully</p>}
        </Form>
      </Formik>
    </div>
  );
}
