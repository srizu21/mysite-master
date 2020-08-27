import React from "react";
import "./cards.css";
import Product from "../images/cement-1.jpg";
function ProductSource1() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="card text-center shadow">
        <div className="overflow">
          <img src={Product} alt="" className="card-img-top img-responsive" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">Cement</h4>
        </div>
      </div>
    </div>
  );
}

export default ProductSource1;
