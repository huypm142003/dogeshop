import { Link } from "react-router-dom";
import contactServices from "../services/contactService";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    content: "",
  });

  const handleChange = (e) => {
    const newContact = { ...contact };
    newContact[e.target.name] = e.target.value;
    newContact[e.target.email] = e.target.value;
    newContact[e.target.phone] = e.target.value;
    newContact[e.target.content] = e.target.value;
    setContact(newContact);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    contactServices.create(contact).then(
      () => {
        toast.success("Your message has been sent!");
        setContact({
          name: "",
          email: "",
          phone: "",
          content: "",
        });
        //clear textarea
        document.getElementById("content-textarea").value = "";
      },
      () => {
        toast.error("Cannot send message!!!");
      }
    );
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <div className="breadcumb">
            <Link to="/">home</Link>
            <span>
              <i className="bx bxs-chevrons-right" />
            </span>
            <Link to="/contact">contact</Link>
          </div>
        </div>
        <div className="contact-container">
          <div className="contact-form">
            <div className="first-container">
              <div className="info-container">
                <div>
                  <h3>Address</h3>
                  <a
                    href="https://goo.gl/maps/dg2WH9r4ExQQRhNm8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Quang Trung Software City, District 12, Ho Chi Minh City,
                    Vietnam
                  </a>
                </div>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:0999999999">+84 999 999 999</a>
                </div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:dogeshop@gmail.com?subject=Feedback">
                    dogeshop@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="second-container">
              <h2>Send Us A Message</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name-input">Tell us your name*</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                    value={contact.name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email-input">Enter your email*</label>
                  <input
                    name="email"
                    id="email-input"
                    type="text"
                    placeholder="Eg. dogeshop@gmail.com"
                    required
                    onChange={handleChange}
                    value={contact.email}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone-input">Enter phone number*</label>
                  <input
                    name="phone"
                    id="phone-input"
                    type="text"
                    placeholder="Eg. 0999999999"
                    required
                    onChange={handleChange}
                    value={contact.phone}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="content-textarea">Message</label>
                  <textarea
                    name="content"
                    id="content-textarea"
                    placeholder="Write us a message"
                    defaultValue={contact.message}
                    onChange={handleChange}
                  />
                </div>
                <button onClick={handleSubmit}>Send message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
