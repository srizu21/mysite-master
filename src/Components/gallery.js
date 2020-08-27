import React from "react";
// Gallery Library
import Gallery from "react-grid-gallery";
// Responsive video plpayer
import ReactPlayer from "react-player";
// video source
import video1 from "./images/VID-20200810-WA0065.mp4";
// images source
import product1 from "./images/product1.jpg";
import product2 from "./images/product2.jpg";
import product3 from "./images/product3.jpg";
import product4 from "./images/product4.jpg";
import product5 from "./images/product5.jpg";
import product6 from "./images/product6.jpg";
import product7 from "./images/product7.jpg";
import product8 from "./images/product8.jpg";
import product9 from "./images/product9.jpg";
import product10 from "./images/product10.jpg";
import product11 from "./images/product11.jpg";
import product12 from "./images/product12.jpg";
import product13 from "./images/product13.jpg";
import product14 from "./images/product14.jpg";
import product15 from "./images/product15.jpg";
import product16 from "./images/product16.jpg";
import product17 from "./images/product17.jpg";
import product18 from "./images/product18.jpg";
import product19 from "./images/product19.jpg";
import product20 from "./images/product20.jpg";
import product21 from "./images/product21.jpg";
/**
 * Gallery Component
 * External libraries used
 * "react-grid-gallery"
 * "react-player"
 * Images are imported as array with dimentions
 */

const pics = [
  {
    src: product1,
    thumbnail: product1,
    thumbnailWidth: 520,
    thumbnailHeight: 199,
    // isSelected: true,
    // caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: product3,
    thumbnail: product3,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: product2,
    thumbnail: product2,
    thumbnailWidth: 520,
    thumbnailHeight: 199,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: product5,
    thumbnail: product5,
    thumbnailWidth: 450,
    thumbnailHeight: 174,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },

  {
    src: product7,
    thumbnail: product7,
    thumbnailWidth: 320,
    thumbnailHeight: 199,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: product6,
    thumbnail: product6,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: product4,
    thumbnail: product4,
    thumbnailWidth: 200,
    thumbnailHeight: 174,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: product8,
    thumbnail: product8,
    thumbnailWidth: 520,
    thumbnailHeight: 199,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: product9,
    thumbnail: product9,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: product10,
    thumbnail: product10,
    thumbnailWidth: 520,
    thumbnailHeight: 199,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: product11,
    thumbnail: product11,
    thumbnailWidth: 450,
    thumbnailHeight: 174,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },

  {
    src: product12,
    thumbnail: product12,
    thumbnailWidth: 320,
    thumbnailHeight: 199,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: product13,
    thumbnail: product13,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: product14,
    thumbnail: product14,
    thumbnailWidth: 200,
    thumbnailHeight: 174,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: product15,
    thumbnail: product15,
    thumbnailWidth: 520,
    thumbnailHeight: 199,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: product16,
    thumbnail: product16,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: product17,
    thumbnail: product17,
    thumbnailWidth: 520,
    thumbnailHeight: 199,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: product18,
    thumbnail: product18,
    thumbnailWidth: 450,
    thumbnailHeight: 174,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },

  {
    src: product19,
    thumbnail: product19,
    thumbnailWidth: 320,
    thumbnailHeight: 199,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: product20,
    thumbnail: product20,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: product21,
    thumbnail: product21,
    thumbnailWidth: 200,
    thumbnailHeight: 174,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
];
function ProductGallery() {
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
      id="gallery"
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1
        style={{ font: "50px Times New Roman, Times, serif", color: "#A93226" }}
      >
        Gallery
      </h1>
      <div
        className="container"
        style={{ height: "400px", overflowY: "scroll" }}
      >
        <Gallery images={pics} />
        <div className="player-wrapper">
          <ReactPlayer
            controls
            className="react-player"
            url={video1}
            width="50%"
            height="50%"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductGallery;
