import React from "react";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import './App.css';



const slides = [
    { id: 1, title: 'Slide 1', image: 'https://theportraitmasters.com/wp-content/uploads/2019/06/LJ2_HeroV2_1280.jpg' },
    { id: 2, title: 'Slide 2', image: 'https://audaces.com/wp-content/uploads/2020/08/fashion-styles.webp' },
    { id: 3, title: 'Slide 3', image: 'https://img.freepik.com/premium-photo/woman-wears-scarf-sunglasses-street_1271244-194448.jpg?uid=R145496865&ga=GA1.1.488613285.1713630384&semt=ais_hybrid' },
  ];
  
  const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
 
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000); 
  
      return () => clearInterval(interval); 
    }, []);
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    const goToPreviousSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };
  
    return (
      <div className="slideshow-container">
        <div className="slide">
          <img className="imgSlides" src={slides[currentIndex].image} alt={slides[currentIndex].title} />
        </div>
        <AiOutlineArrowLeft className="prev" onClick={goToPreviousSlide} />
        <AiOutlineArrowRight className="next" onClick={goToNextSlide} />
      </div>
    );
  };
  
  export default Slideshow;
