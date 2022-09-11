import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import { sliderPromo, sliderPromoMobile } from "../constants";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
    
      window.addEventListener('resize', handleWindowResize);
    
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);

  return (
    <div className="">
      <Slider {...settings}>
          {windowSize.innerWidth > 744 ? sliderPromo.map((p) => (
              <div key={p.id} className="">
                  <a href={`#${p.id}`}>
                      <img src={p.img} alt={p.id} className="lg:w-[2000px] lg:h-[750px] lg:object-fill" />
                  </a>
                </div>
          )) :
          sliderPromoMobile.map((p) => (
            <div key={p.id} className="">
                <a href={`#${p.id}`}>
                    <img src={p.img} alt={p.id} className="w-full object-fill" />
                </a>
              </div>
        ))
        
        }
      </Slider>
    </div>
  )
}

export default Carousel

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}