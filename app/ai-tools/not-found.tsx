"use client";
import React from "react";
import styles from "./NotFound.module.css";

interface NotFoundProps {
  cta?: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({ cta = () => {} }) => {
  return (
    <div className={styles.container}>
      <img
        src="/images/404.webp" // Replace with the actual path to your image
        alt="Not Found"
        className={styles.image}
      />
      <p className={styles.message}>
        عذرًا، المحتوى التي تبحث عنه غير موجود.الرجاء البحث عن شيء أخرز
      </p>
      <button className={styles.button} onClick={cta}>
        تصفح جميع الأدوات
      </button>
    </div>
  );
};

export default NotFound;
