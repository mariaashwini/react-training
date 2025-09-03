# 📘 Day 12 – React User Registrtion Form with Formik and Yup  


## 🎯 Goal

Build and practice a **User Registrtion Form** in React using **Formik and Yup** to:

✅ Handle form state and submission smoothly.
✅ Validate inputs with clear error messages.
✅ Provide a clean and user-friendly UI/UX.

---

## 🧩 What I Built  

### ✅ 1. Formik Form Handling

- Simplifies form state management.

- Handles submission and field-level errors automatically.

### ✅ 2. Yup Validation Schema

- Enforces validation rules:

- Full Name must be at least 3 characters.

- Email must follow valid email format.

- Password must be at least 6 characters.

- Confirm Password must match Password.

### ✅ 3. Error and Success Feedback

- ErrorMessage component displays validation errors.

- Shows success message ("✅ Registered Successfully") after form submission.

### ✅ 4. Reset and Feedback Flow

- Form resets after submission.

- Success message disappears after 3 seconds using useState.

---

🧠 **Key Learnings**  

- Formik removes boilerplate by managing form state, validation, and submission.

- Yup integrates seamlessly with Formik for schema-based validation.

- Real-time error handling improves user experience.

- Managing a temporary success message with useState makes UI more engaging.

---

📁 Folder Structure  

```text

Day12_Formik+Yup_RegisterForm/
├── RegistrationForm.js
├── RegistrationForm.css
└── README.md
