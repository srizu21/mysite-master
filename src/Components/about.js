import React from "react";
import img from "./images/director.jpg";
/**
 * About Component
 * Static text contents
 * No external packages used
 * Column split 6:6
 */
function About() {
  return (
    // Outer most wrapper division uses entire screen space
    <div
      className="container-fluid"
      style={{
        background: "url(background.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment:"fixed"
      }}
      id="about"
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1
        style={{ font: "50px Times New Roman, Times, serif", color: "#A93226" }}
      >
        About us...
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1
              style={{
                font: "40px Times New Roman, Times, serif",
                color: "#A93226",
              }}
            >
              Our Mission
            </h1>
            <h6
              style={{
                font: "Times New Roman, Times, serif",
                color: "#F8A098",
              }}
            >
              We shall ensure quality, timely and budgetary deliverances through
              continuous technology upgradation, thereby enhancing the value of
              all its stakeholders
            </h6>
            <h1
              style={{
                font: "40px Times New Roman, Times, serif",
                color: "#A93226",
              }}
            >
              Our Vision
            </h1>
            <h6
              style={{
                font: "Times New Roman, Times, serif",
                color: "#F8A098",
              }}
            >
              We shall be a leading global enterprise in world - class
              infrastructure development & environment management through
              sustainable growth
            </h6>
          </div>
          <div className="col-6" style={{ textAlign: "right" }}>
            <img
              src={img}
              height="150px"
              width="250px"
              alt="..."
              className="rounded-circle"
            ></img>
            <br></br>
            <label
              style={{
                font: " 13px Times New Roman, Times, serif",
                color: "#F8A098",
              }}
            >
              "Perfection is not attainable, but if
              <br /> we chase perfection we can catch excellence"
            </label>
            <br></br>

            <label
              style={{
                font: " 25px Times New Roman, Times, serif",
                color: "#F8A098",
              }}
            >
              <strong>Hemanth Kumar M</strong>
            </label>
            <br />
            <label
              style={{
                font: " 20px Times New Roman, Times, serif",
                color: "#F8A098",
              }}
            >
              <strong>Director</strong>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
