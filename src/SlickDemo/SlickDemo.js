import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import './SlickDemo.css';  

export class SlickDemo extends Component {  
    render() {  
        var settings = {  
          dots: false, 
          infinite: true,  
          speed: 700,  
          centerMode: true,  
          slidesToShow: 1,  
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2300,
          pauseOnHover: false,
          fade: true   
          };  
          return (  
            <div className="slides">    
            <Slider {...settings} >
                <img src= {'assets/W3.jpg'} className="img" alt=""/>
                <img src= {'assets/W5.jpg'} className="img" alt=""/>
                <img src= {'assets/W6.jpg'} className="img" alt=""/>    
                <img src= {'assets/W4.jpg'} className="img" alt=""/>    
            </Slider>  
            </div>  
          );  
        }  
      }  
  
export default SlickDemo