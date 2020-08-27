import React, { Component } from "react";
import emailjs from "emailjs-com";
import "./enquiry-form.css";

/**
 * External library "emailjs-com"
 * Form validated
 * External CSS used
 * email enabled
 */
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class EnquiryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qname: null,
      email: null,
      subject: null,
      message: null,
      formErrors: {
        qname: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      e.preventDefault();

      emailjs
        .sendForm(
          "gmail",
          "template_njqaBZAE",
          e.target,
          "user_2pp8EvD0TNJcMToKaN5e7"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "qname":
        formErrors.qname =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "message":
        formErrors.message =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1
            style={{
              font: "50px Times New Roman, Times, serif",
              color: "#A93226",
            }}
          >
            Query
          </h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="qname">
              <input
                className={formErrors.qname.length > 0 ? "error" : null}
                placeholder="Your Name Goes Here..."
                type="text"
                name="qname"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.qname.length > 0 && (
                <span className="errorMessage">{formErrors.qname}</span>
              )}
            </div>
            <div className="email">
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Your Email Address Goes Here..."
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="subject">
              <input
                className={formErrors.subject.length > 0 ? "error" : null}
                placeholder="Your Subject Goes Here..."
                type="text"
                name="subject"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.subject.length > 0 && (
                <span className="errorMessage">{formErrors.subject}</span>
              )}
            </div>
            <div className="message">
              <input
                className={formErrors.message.length > 0 ? "error" : null}
                placeholder="Your Message Goes Here..."
                type="textbox"
                name="message"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.message.length > 0 && (
                <span className="errorMessage">{formErrors.message}</span>
              )}
            </div>
            <div className="querysubmit">
              <button type="submit">submit query</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default EnquiryForm;
