import React from "react";
import "./ImageComponent.css";

const ImageComponent: React.FC = () => {
  return (
    <div className="image-section">
      <img src="/images/human2.jpeg" alt="Image 1" className="image image-1" />
      <img src="/images/human1.jpeg" alt="Image 2" className="image image-2" />
    </div>
  );
};

export default ImageComponent;
