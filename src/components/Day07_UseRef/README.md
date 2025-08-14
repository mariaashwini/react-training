# 📘 Day 7 – React UseRef

##  🎯 Goal

Build a functional Contact Form in React using the useRef hook to:

✅ Access and manipulate DOM elements directly.

✅ Set focus programmatically on component mount.

✅ Read input values without using state-controlled components.

✅ Reset input fields after submission without re-rendering.

---

## 🧩 What I Built

✅ 1. ContactFormRef.js

A form component that:

- Focuses the Name input when the component mounts.

- Uses useRef to read and reset field values.

- Shows a success message after submission and hides it after 3 seconds.

🧠 ** Key Concepts Demonstrated: **

- Direct DOM element access using ref.current

- Using useEffect for auto-focus on mount

- Minimal re-renders by avoiding controlled components

- Simple validation for empty fields

```jsx
useEffect(() => {
  nameRef.current.focus();
}, []);

const handleSubmit = (e) => {
  e.preventDefault();
  const name = nameRef.current.value;
  const email = emailRef.current.value;
  const message = messageRef.current.value;

  if (!name || !email || !message) {
    alert("Please fill all the fields");
    return;
  }

  console.log("Contact Form Submitted", { name, email, message });
  setSubmitted(true);

  nameRef.current.value = "";
  emailRef.current.value = "";
  messageRef.current.value = "";

  setTimeout(() => setSubmitted(false), 3000);
};
```

### ✅ 2. Styling in ContactForm.css

Basic form layout using flex column direction.

Padding and spacing for better UI readability.

.contact-form {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.contact-form input,
.contact-form textarea {
  margin: 5px 0;
  padding: 8px;
}


🧠 **Key Learnings**

- useRef allows persistent values between renders without triggering re-renders.

- Ideal for reading and modifying DOM elements directly.

- Useful for auto-focus, scrolling, or integrating non-React libraries.

- Unlike useState, changes in useRef values don’t cause re-renders, making it more efficient for certain cases.

📁 Folder Structure

Day07_UseRef/
├── ContactFormRef.js
├── ContactForm.css
└── README.md


🗂️ Git Commits

```bash
git add src/components/Day07_UseRef/
git commit -m "Day 7: useRef demo – Contact Form with auto-focus & DOM access"
git push origin main
```

🛠 Enhancements to be Made
## ✅ Improve UX

- Add animations for the success message

- Disable the submit button while processing

## ✅ Explore State Management

- Compare controlled vs uncontrolled components performance

## ✅ Add More Features

- Form validation with libraries like Yup or Formik

- Integration with backend API for real submissions

📌 Next Steps
🎯 Learn useCallback Hook

- Understand memoized functions and their benefits.

- Build a debounced search example to reduce unnecessary re-renders.