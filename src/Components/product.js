import React from "react";
import ProductCards from "./products/product-handler";
/**
 * Products component
 * No external packages used
 * products are shown as cards
 */
function Product() {
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
      id="product"
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
        Our Products
      </h1>
      {/* Productscards goes here */}
      <div className="container">
        <ProductCards />
      </div>
    </div>
  );
}

export default Product;
