import React, { useState } from "react";
import "./CSSRepo/ContactUS.css";

const ContactUS = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subjectLine: "",
    messageBox: "",
  });

  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number is invalid";
    }

    if (!formData.subjectLine) {
      newErrors.subjectLine = "Subject is required";
    }

    if (!formData.messageBox) {
      newErrors.messageBox = "Message cannot be empty";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        subjectLine: "",
        messageBox: "",
      });
    } else {
      setError(validationErrors);
    }
  };

  return (
    <div className="contact-us-container">
      <h3>Get in Touch</h3>
      <h5>Feel free to reach out to us for any inquiries.</h5>
      {isSubmitted && (
        <p className="success-message">
          Thank you for contacting us! We'll get back to you soon.
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {error.name && <p className="error">{error.name}</p>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {error.email && <p className="error">{error.email}</p>}
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {error.phoneNumber && <p className="error">{error.phoneNumber}</p>}
        </div>

        <div className="form-group">
          <label>Subject:</label>
          <input
            type="text"
            name="subjectLine"
            value={formData.subjectLine}
            onChange={handleChange}
          />
          {error.subjectLine && <p className="error">{error.subjectLine}</p>}
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="messageBox"
            value={formData.messageBox}
            onChange={handleChange}
          />
          {error.messageBox && <p className="error">{error.messageBox}</p>}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUS;
