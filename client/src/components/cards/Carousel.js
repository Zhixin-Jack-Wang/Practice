import React from "react";
import { Consumer } from "../../context";

const Carousel = () => {
  return (
    <Consumer>
      {value => {
        const { imgArr } = value;
        return (
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item">
                <img src={imgArr[0]} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item ">
                <img src={imgArr[1]} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item active">
                <img src={imgArr[2]} className="d-block w-100" alt="..." />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Carousel;
