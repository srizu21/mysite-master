import React from "react";
import "./cards.css";
import Product from "../images/paver-block-1.jpg";

/**
 * Products are shown in card
 * each card each product
 */
function ProductSource1() {
  return (
    <div className="container d-flex justify-content-center">
      <div
        className="card text-center shadow"
        style={{ boxShadow: "0px 10px 50px #F6DDCC" }}
      >
        <div className="overflow">
          <img src={Product} alt="" className="card-img-top img-responsive" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">Paver block</h4>
        </div>
      </div>
    </div>
  );
}

export default ProductSource1;
