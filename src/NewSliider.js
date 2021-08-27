import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {data} from './data'
import './Carousel.css'
function NewSliider() {
    return (
        <div>
            <div style={{margin:"20px"}}>
    <Slider autoplay={true}
     autoplaySpeed={2600} 
     dots={true}
    //  prevArrow={<PreviousBtn/>}
    //  nextArrow={<NextBtn/>}
     initialSlide={2}
     infinite
     customPaging={ (i) =>{
return(
<div>
    <img src={ data[i] } className="img_sec_dot"/>
</div>
);

     } } 
    dotsClass="slick-dots custom-indicator"
      >


{data.map((item)=>(
        <div>
            <img src={ item } className="img_sec"/>
        </div>
))}
    </Slider>
        </div>
            
        </div>
    )
}

export default NewSliider
