import React from "react";
/**
 * Home component
 * Bootstarp Images carousel
 * No external packages used
 */
function Home() {
  return (
    // Outer most wrapper division uses entire screen space
    <div
      className="container-fluid"
      style={{
        height: "100%",
        background: "url(background.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment:"fixed"
      }}
      id="home"
    >
      {/* Carousel Container */}
      <div className="container">
        <br/>
        <br/>
        <br/>
        <br/>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="2000">
              <img
                src="https://www.agcs.allianz.com/news-and-insights/expert-risk-articles/coronavirus-loss-prevention-construction/_jcr_content/root/parsys_1220582246/stage_2096483034/stageimage.img.jpeg/1586238285970/grd-2-2018-engineering-stage.jpeg"
                className="d-block w-100 h-100 "
                alt="img1"
              />
            </div>
            <div className="carousel-item" data-interval="2000">
              <img
                className="d-block w-100 h-100"
                src="https://sparmsdc-static.s3.amazonaws.com/uploads/2017/04/crane.jpg"
                alt="img2"
              />
            </div>

            <div className="carousel-item" data-interval="2000">
              <img
                className="d-block w-100 h-100"
                src="https://www.realcommercial.com.au/blog/wp-content/uploads/2016/04/MELBOURNE-1024x433.jpg"
                alt="img3"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleInterval"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleInterval"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
