import React from "react";
import "./Video.css";
import Character from "../Svgs/Character/Character";
import Docs from "../Svgs/Docs/Docs";

const Video: React.FC = () => {
  return (
    <div className="design-container">
      {/* Background Video */}
      <video
        className="background-video desktop-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/video-desktop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        className="background-video mobile-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/video-mobile.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Character Section */}
      <div className="character">
            <Character/>
            <p className="character-text">لغة ضاد</p>
          {/* <img src="/dal.svg" alt="ض" className="character-image" /> */}
        </div>

      {/* Content */}
      <div className="content">
        {/* Text Section */}
        <div className="text">
          <p className="description">
          في الأكاديمية العربية للبرمجة، نسعى دائمًا إلى تقديم محتوى تعليمي يساهم في تمكين وتطوير مهارات المبرمجين الناطقين باللغة العربية. ومن هذا المنطلق، يهدف هذا القسم إلى تبسيط المفاهيم البرمجية لأي شخص، سواء كان مبتدئًا أو محترفًا، من فهمها واستيعابها بسهولة. نحرص على أن تكون الشروحات دقيقة وشاملة، مع توفير أمثلة عملية تساعد المتعلمين على تطبيق ما يتعلمونه بشكل فعّال.
          </p>
        
          <button className="cta-button">
            <Docs/>
            تابع معنا 
          </button>
           
        </div>

      </div>
    </div>
  );
};

export default Video;
