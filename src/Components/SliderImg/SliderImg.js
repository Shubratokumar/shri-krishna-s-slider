import React from "react";
import { Carousel } from "react-bootstrap";
import krishna1 from "../../Assets/Images/0001.jpg"
import krishna2 from "../../Assets/Images/0002.jpg"
import krishna3 from "../../Assets/Images/0003.jpg"
import krishna4 from "../../Assets/Images/0004.jpg"
import krishna5 from "../../Assets/Images/0005.jpg"
import krishna6 from "../../Assets/Images/0006.jpg"
import krishna7 from "../../Assets/Images/0007.jpg"
import krishna8 from "../../Assets/Images/0008.jpg"
import krishna9 from "../../Assets/Images/0009.jpg"
import krishna10 from "../../Assets/Images/0010.jpg"

const SliderImg = () => {
  return (
    <div className="col">
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={krishna1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={krishna2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={krishna3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={krishna4}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={krishna5}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={krishna6}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={krishna7}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={krishna8}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={krishna9}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={krishna10}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default SliderImg;
