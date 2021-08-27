import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import image5 from './assets/image5.jpg'
import image6 from './assets/image6.jpg'
import './Carousel.css'
const Carousel = () => {
    return (
        <div style={{margin:"20px"}}>
            <Slider autoplay={true} autoplaySpeed={2600} dots={true}>
<img src={ image1 } className="img_sec"/>
<img src={ image2}  className="img_sec" />
<img src={ image3}  className="img_sec" />
<img src={ image4}  className="img_sec" />
<img src={ image5 } className="img_sec"  />
<img src={ image6 } className="img_sec" />
            </Slider>
        </div>
    )
}

export default Carousel
