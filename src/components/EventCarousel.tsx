import { useState, useEffect } from 'react';
import foto1 from '../assets/fotos/1.jpg';
import foto2 from '../assets/fotos/2.jpg';
import foto3 from '../assets/fotos/3.jpg';
import foto4 from '../assets/fotos/4.jpg';
import './EventCarousel.css';

export default function EventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [foto1, foto2, foto3, foto4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Auto-slide every 4 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="event-carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <div className="carousel-item" key={index}>
            <img src={img} alt={`Evento ${index + 1}`} />
          </div>
        ))}
      </div>
      
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a foto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
