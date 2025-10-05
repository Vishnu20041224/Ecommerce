import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Carousel.css";

const Carousel = ({ slides, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="custom-carousel">
      <button className="prev " onClick={prevSlide}>❮</button>
      
      <div className="carousel-slides">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`carousel-item ${i === current ? "active" : ""}`}
          >
            <Link to={slide.link}>
              <img  src={slide.img} alt={`slide-${i}`} />
            </Link>
          </div>
        ))}
      </div>

      <button className="next " onClick={nextSlide}>❯</button>

      {/* Dots */}
      <div className="dots d-block d-sm-none">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === current ? "dot active" : "dot"}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
