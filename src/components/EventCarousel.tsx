import { useState, useEffect } from 'react';
import './EventCarousel.css';

export default function EventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholders for event photos. The user can replace these URLs with real images.
  const images = [
    "https://placehold.co/600x400/2a1055/ffffff?text=Foto+del+Evento+1",
    "https://placehold.co/600x400/140a2d/00f5d4?text=Foto+del+Evento+2",
    "https://placehold.co/600x400/9d4edd/ffffff?text=Foto+del+Evento+3"
  ];

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
