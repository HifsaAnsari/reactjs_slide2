import React, { Component } from "react";
import Slider from "react-slick";
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import image5 from './assets/image5.jpg'
import image6 from './assets/image6.jpg'
export default class SimpleSlider extends Component {
    render() {
        const settings = {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 3,
          speed: 500,
          dot:true
        };
        return (
          <div>
            <h2>Center Mode</h2>
            <Slider {...settings}>
              <div>
             <img src={image1} />
              </div>
              <div>
              <img src={image2} />
              </div>
              <div>
              <img src={image3} />
              </div>
              <div>
              <img src={image4} />
              </div>
              <div>
              <img src={image5} />
              </div>
              <div>
              <img src={image6} />
              </div>
            </Slider>
          </div>
        );
      }
    }