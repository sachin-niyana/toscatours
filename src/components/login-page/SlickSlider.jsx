"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { SliderList } from "../common/Helper";
import LoginPage from "./LoginPage";
const SlickSlider = () => {
  const sliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="max-h-screen overflow-hidden relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <LoginPage />/
      </div>
      <div className="bg-black opacity-50 w-full min-h-screen absolute z-10"></div>
      <Slider ref={sliderRef} {...settings}>
        {SliderList.map((obj, index) => (
          <Image
            key={index}
            className="min-h-screen object-cover"
            width={1440}
            height={900}
            src={obj.image}
            alt="mountain"
          />
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
