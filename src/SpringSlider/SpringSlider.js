import React from 'react'
import "./SpringSlider.css"
import Slider from "@farbenmeer/react-spring-slider";

const SpringSlider = () => {
	return (
		<Slider>
			<div><img src= {'assets/W3.jpg'} className="img" alt=""/></div>
			<div><img src= {'assets/W5.jpg'} className="img" alt=""/></div>
			<div><img src= {'assets/W6.jpg'} className="img" alt=""/></div>
            <div><img src= {'assets/W4.jpg'} className="img" alt=""/></div>
		</Slider>
	);
};

export default SpringSlider  
               