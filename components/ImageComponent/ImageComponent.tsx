import React from "react";
import "./ImageComponent.css";

interface ImageSectionProps {
  images: string[];
}

const ImageComponent: React.FC<ImageSectionProps> = ({ images }) => {
  return (
    <div className="image-section">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          className={`image-item image-${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ImageComponent;
