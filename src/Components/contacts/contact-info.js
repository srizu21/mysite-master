import React from "react";
import {
  FaWhatsapp,
  FaFacebookSquare,
  FaInstagram,
  FaPhoneSquareAlt,
  FaMailBulk,
  FaMapMarkerAlt,
} from "react-icons/fa";
/**
 * Application owner contact informations
 * Values are labled
 * External library "react-icons/fa"
 * Social media integrated with browser calling
 * External CSS used
 */
function ContactInfo() {
  return (
    <div className="container" style={{ padding: "1rem" }}>
      <h1
        style={{ font: "50px Times New Roman, Times, serif", color: "#A93226" }}
      >
        Reach us..!
      </h1>
      {/* Social media div */}
      <div className="row">
        <div className="col-2">
          <label>
            <a href="https://m.facebook.com/SRT-Traders-102634824860519/">
              <FaFacebookSquare size="30px" color="blue" />
            </a>
          </label>
        </div>
        {/* Instagram info  */}
        <div className="col-2">
          <label>
            <a href="https://m.facebook.com/SRT-Traders-102634824860519/">
              <FaInstagram size="30px" color="red" />
            </a>
          </label>
        </div>
      </div>
      {/* phone info */}
      <div className="row">
        <div className="col-2">
          <a href="tel:+91 9994326376">
            <FaPhoneSquareAlt size="30px" />
          </a>
        </div>
        <div className="col-10" style={{ padding: "1px" }}>
          <label
            style={{ font: "Times New Roman, Times, serif", color: "#F8A098" }}
          >
            <strong>+91 99943 26376</strong>
          </label>
        </div>
      </div>
      {/* Whatsapp info */}
      <div className="row">
        <div className="col-2">
          <FaWhatsapp size="30px" color="green" />
        </div>
        <div className="col-10" style={{ padding: "2px" }}>
          <label
            style={{ font: "Times New Roman, Times, serif", color: "#F8A098" }}
          >
            <strong>+91 99943 26376</strong>
          </label>
        </div>
      </div>
      {/* mail info */}
      <div className="row">
        <div className="col-2">
          <FaMailBulk size="30px" color="red" />
        </div>
        <div className="col-10" style={{ padding: "2px" }}>
          <label
            style={{ font: "Times New Roman, Times, serif", color: "#F8A098" }}
          >
            <strong>srttraders2020@gmail. com</strong>
          </label>
        </div>
      </div>

      {/* map info */}
      <div className="row">
        <div className="col-2">
          <FaMapMarkerAlt size="30px" color="green" />
        </div>
        <div className="col-10" style={{ padding: "2px" }}>
          <label
            style={{ font: "Times New Roman, Times, serif", color: "#F8A098" }}
          >
            <strong>
              DM complex <br />
              Kundru Perumal Kovil Near
              <br />
              Somyanoor(po) Thadagam Road
              <br />
              Coimbatore-641 108
            </strong>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
