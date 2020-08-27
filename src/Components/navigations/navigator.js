import React from "react";
import { Link } from "react-scroll";
import { Wave } from "react-animated-text";
import Keyboard, { Cursor } from "react-mk";

/**
 * Appicayion nav bar
 * Fixed top
 * Smooth scrolling enabled
 * text animation enabled
 * external libraries
 * "react-scroll" "react-animated-text" "react-mk"
 */
function Scroller() {
  return (
    <div
      className="container fixed-top"
      style={{
        border: "1px",
        borderColor: "#F2D7D5",
        borderRadius: "10px",
        boxShadow: "0px 10px 50px #F6DDCC",
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link
          className="navbar-brand btn"
          to="home"
          smooth={true}
          duration={1000}
          style={{
            color: "#FAE5D3",
            font: "30px Times New Roman, Times, serif",
          }}
        >
          <Keyboard>SRT Traders</Keyboard>
          <Cursor>!</Cursor>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li>
              <Link
                className="nav-link  btn"
                to="home"
                smooth={true}
                duration={1000}
                style={{
                  color: "#A93226",
                  font: "30px Times New Roman, Times, serif",
                }}
              >
                <strong>
                  <Wave text="Home" iterations={1} />
                </strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn"
                to="about"
                smooth={true}
                duration={1000}
                style={{
                  color: "#A93226",
                  font: "30px Times New Roman, Times, serif",
                }}
              >
                <strong>
                  <Wave text="About" iterations={1} />
                </strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn"
                to="product"
                smooth={true}
                duration={1000}
                style={{
                  color: "#A93226",
                  font: "30px Times New Roman, Times, serif",
                }}
              >
                <strong>
                  <Wave text="Products" iterations={1} />
                </strong>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link btn"
                to="gallery"
                smooth={true}
                duration={1000}
                style={{
                  color: "#A93226",
                  font: "30px Times New Roman, Times, serif",
                }}
              >
                <strong>
                  <Wave text="Gallery" iterations={1} />
                </strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn"
                to="contact"
                smooth={true}
                duration={1000}
                style={{
                  color: "#A93226",
                  font: "30px Times New Roman, Times, serif",
                }}
              >
                <strong>
                  <Wave text="Contact" iterations={1} />
                </strong>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Scroller;
