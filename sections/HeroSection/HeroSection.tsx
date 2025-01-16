"use client";

import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import ChackBoard from "../../components/Svgs/ChackBoard/ChackBoard";
import ArrowButton from "@/components/ArrowButton/ArrowButton";
import { slides } from "@/data/slides";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (direction: 1 | -1) => {
    setCurrentSlide((prev) => {
      const newIndex = (prev + direction + slides.length) % slides.length;
      return newIndex;
    });
  };

  return (
    <section className={styles.heroSection}>
      <div
        className={styles.slider}
        style={{
          backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
        }}
      >
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{slides[currentSlide].title}</h1>
          </div>
          <div className={styles.textContainer}>
            <p className={styles.description1}>
              {slides[currentSlide].description1}
            </p>
            <p className={styles.description2}>
              {slides[currentSlide].description2}
            </p>
            <button className={styles.ctaButton}>
              {slides[currentSlide].icon && (
                <span className={styles.icon}>{slides[currentSlide].icon}</span>
              )}
              {slides[currentSlide].buttonText}
            </button>
          </div>
        </div>
        <ArrowButton
          direction="left"
          onClick={() => changeSlide(-1)}
          color="#ffffff"
        />
        <ArrowButton
          direction="right"
          onClick={() => changeSlide(1)}
          color="#ffffff"
        />
      </div>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
