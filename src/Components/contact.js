import React from "react";
import ContactInfo from "./contacts/contact-info";
import EnquiryForm from "./contacts/enquiry-form";

/**
 * Contact component
 * column separated
 */
function Contact() {
  return (
    <div
      className="container-fluid"
      style={{
        height: "100%",
        width: "100",
        backgroundImage: "url(background.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment:"fixed"
      }}
      id="contact"
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1
        style={{ font: "50px Times New Roman, Times, serif", color: "#A93226" }}
      >
        Contact Us
      </h1>
      <div className="container " id="contact">
        <div className="row">
          <div className="col-6">
            <EnquiryForm />
          </div>
          <div className="col-1"></div>
          <div
            className="col-5"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 10px 50px #555",
            }}
          >
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
