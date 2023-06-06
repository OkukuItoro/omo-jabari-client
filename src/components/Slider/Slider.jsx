import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.pexels.com/photos/6627106/pexels-photo-6627106.jpeg?auto=compress&cs=tinysrgb&w=1800&dpr=1",
    "https://images.pexels.com/photos/3775120/pexels-photo-3775120.jpeg?auto=compress&cs=tinysrgb&w=1800&dpr=1",
    "https://images.pexels.com/photos/10679171/pexels-photo-10679171.jpeg?auto=compress&cs=tinysrgb&w=1800&dpr=1",
    "https://images.pexels.com/photos/7685716/pexels-photo-7685716.jpeg?auto=compress&cs=tinysrgb&w=1800&dpr=1",
    "https://images.pexels.com/photos/5560471/pexels-photo-5560471.jpeg?auto=compress&cs=tinysrgb&w=1800&dpr=1",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
  };

  /*   Include a set timeout function for next slide */
  /*
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
*/

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="hero image" />
        <img src={data[1]} alt="hero image" />
        <img src={data[2]} alt="hero image" />
        <img src={data[3]} alt="hero image" />
        <img src={data[4]} alt="hero image" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <HiOutlineArrowLeft />
        </div>
        <div className="icon" onClick={nextSlide}>
          <HiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Slider;
