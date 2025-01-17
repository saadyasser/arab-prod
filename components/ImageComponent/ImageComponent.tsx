import React from "react";
import "./ImageComponent.css";
import Image from "next/image";

const ImageComponent: React.FC = () => {
  return (
    <div className="image-section">
      <Image
        src="/images/human2.jpeg"
        alt="Image 1"
        width={100}
        height={100}
        className="image image-1"
      />
      <Image
        src="/images/human1.jpeg"
        alt="Image 1"
        width={100}
        height={100}
        className="image image-2"
      />
      {/* <img src="/images/human2.jpeg" alt="Image 1" className="image image-1" />
      <img src="/images/human1.jpeg" alt="Image 2" className="image image-2" /> */}
    </div>
  );
};

export default ImageComponent;
