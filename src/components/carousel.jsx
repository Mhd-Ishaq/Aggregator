import React, { useEffect, useState } from "react";

const Carousel = ({ slides, handleSliderClick, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNextSlide();
    }, interval);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, [currentIndex, interval]);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container" >
      <button onClick={goToPrevSlide} className="prev-button">
        &lt;
      </button>
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[currentIndex].imageUrls})` }}
        onClick={handleSliderClick}
      >
        <img
          src={slides[currentIndex].imageUrl}
          alt={`Slide ${currentIndex + 1}`}
          className="slide-image"
        />
        <div className="slide-content">
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
        </div>
      </div>
      <button onClick={goToNextSlide} className="next-button">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
