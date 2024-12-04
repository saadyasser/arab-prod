"use client";

import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import ChackBoard from "../../components/Svgs/ChackBoard/ChackBoard";

interface Slide {
  title: string;
  description1: string;
  description2?: string
  buttonText: string;
  icon?: React.ReactNode
  backgroundImage: string; // Background image for each slide
}

const slides: Slide[] = [
  {
    title: "تعمل الأكاديمية العربية للبرمجة كجسر يربط العقول التكنولوجية العربية في المهجر بالطلبة العرب أينما كانوا",
    description1: "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية",
    description2: "وأسلوب تدريسي ممتع يتناسب مع مختلف الطرق التعليمية للمبتدئين والمحترفين بإشراف مدربين ومبرمجين ذوي خبرة عالمية في المجال التقني",
    buttonText: "المسارات التعليمية",
    icon: <ChackBoard/>,
    backgroundImage: "/images/header-image.jpg", // Replace with your image paths
  },
  {
    title: "تعمل الأكاديمية العربية للبرمجة كجسر يربط العقول التكنولوجية العربية في المهجر بالطلبة العرب أينما كانوا",
    description1: "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية",
    description2: "وأسلوب تدريسي ممتع يتناسب مع مختلف الطرق التعليمية للمبتدئين والمحترفين بإشراف مدربين ومبرمجين ذوي خبرة عالمية في المجال التقني",
    buttonText: "المسارات التعليمية",
    icon: <ChackBoard/>,
    backgroundImage: "/images/header-image.jpg", // Replace with your image paths
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className={styles.heroSection}>
      <div
        className={styles.slider}
        style={{ backgroundImage: `url(${slides[currentSlide].backgroundImage})` }}
      >
        {/* <div className={styles.content}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{slides[currentSlide].title}</h1>
            <p className={styles.description}>{slides[currentSlide].description}</p>
            <button className={styles.ctaButton}>{slides[currentSlide].buttonText}</button>
          </div>
        </div> */}
        <div className={styles.content}>
          {/* Title Section */}
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{slides[currentSlide].title}</h1>
          </div>
          {/* Description + Button Section */}
          <div className={styles.textContainer}>
            <p className={styles.description1}>{slides[currentSlide].description1}</p>
            <p className={styles.description2}>{slides[currentSlide].description2}</p>
            <button className={styles.ctaButton}>
            {slides[currentSlide].icon && <span className={styles.icon}>{slides[currentSlide].icon}</span>}
            {slides[currentSlide].buttonText}
            </button>

          </div>
        </div>
        {/* Navigation */}
        <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={handlePreviousSlide}>
          &#8249;
        </button>
        <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={handleNextSlide}>
          &#8250;
        </button>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
