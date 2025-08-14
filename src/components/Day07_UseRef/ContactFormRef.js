import { useEffect, useRef, useState } from "react";
import "./ContactForm.css";


export default function ContactFormRef() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [submitted, setSubmitted] = useState(false);
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
      return false;
    }

    console.log("Contact Form Submitted", { name, email, message });
    setSubmitted(true);

    // Clear input fields
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" ref={nameRef} placeholder="Enter name" />
        <input type="email" ref={emailRef} placeholder="Enter email" />
        <textarea ref={messageRef} placeholder="Enter message" />
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Message sent successfully</p>}
    </div>
  );
}
