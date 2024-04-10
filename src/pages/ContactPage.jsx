import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    number: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Do something with the form data (e.g., submit to a server, perform validation)
    console.log("Form submitted:", formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      number: "",
      message: "",
    });
  };

  const { name, email, subject, number, message } = formData;
  return (
    <div>
      <main className="form-container">
        <h1>Contact Us</h1>
        <p>Have any questions? Drop a message</p>

        <form name="contact" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleChange}
                placeholder="Enter your Full Name"
                name="name"
                required
                minLength="8"
                maxLength="16"
              />
            </div>
            <div className="col">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter Email Address"
                name="email"
                required
                minLength="8"
                maxLength="24"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={handleChange}
                id="subject"
                placeholder="Enter Subject"
                name="subject"
                required
                minLength="15"
                maxLength="50"
              />
            </div>
            <div className="col">
              <label htmlFor="mobile">Contact Number</label>
              <input
                type="tel"
                id="mobile"
                value={number}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
                name="number"
                required
                minLength="10"
                maxLength="10"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                value={message}
                onChange={handleChange}
                placeholder="Enter your issue/message"
                rows="3"
                name="message"
                required
                minLength="15"
                maxLength="300"
              ></textarea>
            </div>
          </div>
          <button className="btn">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default ContactPage;
