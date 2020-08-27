import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductSource1 from "./products-cards/product-source1";
import ProductSource2 from "./products-cards/product-source2";
import ProductSource3 from "./products-cards/product-source3";
import ProductSource4 from "./products-cards/product-source4";
import ProductSource5 from "./products-cards/product-source5";
import ProductSource6 from "./products-cards/product-source6";
import ProductSource7 from "./products-cards/product-source7";
import ProductSource8 from "./products-cards/product-source8";
import ProductSource9 from "./products-cards/product-source9";
import ProductSource10 from "./products-cards/product-source10";

/**
 * Cards handler function
 * All independent cards are accessed thru handler
 * carousel enabled
 * responsive
 */
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function ProductCards() {
  return (
    <Carousel
      responsive={responsive}
      autoPlay="true"
      autoPlaySpeed="5000"
      showDots="true"
      infinite="true"
      keyBoardControl="true"
    >
      <div>
        <ProductSource1 />
      </div>
      <div>
        <ProductSource2 />
      </div>
      <div>
        <ProductSource3 />
      </div>
      <div>
        <ProductSource4 />
      </div>
      <div>
        <ProductSource5 />
      </div>
      <div>
        <ProductSource6 />
      </div>
      <div>
        <ProductSource7 />
      </div>
      <div>
        <ProductSource8 />
      </div>
      <div>
        <ProductSource9 />
      </div>
      <div>
        <ProductSource10 />
      </div>
    </Carousel>
  );
}

export default ProductCards;
