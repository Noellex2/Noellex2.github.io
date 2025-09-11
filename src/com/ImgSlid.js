import React, { useState, useEffect } from 'react';
import './ImgSild.css';

function ImgSild() {
  const images = [
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/7.jpg",
    "/img/5.jpg",
    "/img/9.jpg"
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  // ✅ เพิ่ม useEffect สำหรับเลื่อนอัตโนมัติ
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // เลื่อนทุก 3 วินาที

    return () => clearInterval(interval); // ล้าง interval เวลาคอมโพเนนต์ถูกทำลาย
  }, [images.length]);

  return (
    <div className="slider">
      <button className="arrow left" onClick={prevSlide}>
        &#10094;
      </button>

      <img src={images[current]} alt="slide" className="slide-img" />

      <button className="arrow right" onClick={nextSlide}>
        &#10095;
      </button>        

    </div>
  );
}

export default ImgSild;
