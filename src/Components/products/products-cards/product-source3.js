import React from "react";
import "./cards.css";
import Product from "../images/paver-block-3.jpg";
function ProductSource3() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="card text-center shadow">
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

export default ProductSource3;
