import React from "react";
import "./Video.css";
import Character from "../Svgs/Character/Character";
import Docs from "../Svgs/Docs/Docs";

const Video: React.FC = () => {
  return (
    <div className="design-container">
      {/* Background Video */}
      <video
        src="/videos/aca-video-desktop.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="background-video desktop-video"
      />

      <video
        src="/videos/aca-video-mobile.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="background-video mobile-video"
      />

      <div className="content">
        {/* Character Section */}
        <div className="character">
          <Character className="icon-character" />
          <p className="character-text">لغة ضاد</p>
        </div>

        {/* Content */}
        <div className="description">
          {/* Text Section */}
          <p className="content-description">
            في الأكاديمية العربية للبرمجة، نسعى دائمًا إلى تقديم محتوى تعليمي
            يساهم في تمكين وتطوير مهارات المبرمجين الناطقين باللغة العربية. ومن
            هذا المنطلق، يهدف هذا القسم إلى تبسيط المفاهيم البرمجية لأي شخص،
            سواء كان مبتدئًا أو محترفًا، من فهمها واستيعابها بسهولة. نحرص على أن
            تكون الشروحات دقيقة وشاملة، مع توفير أمثلة عملية تساعد المتعلمين على
            تطبيق ما يتعلمونه بشكل فعّال.
          </p>

          <button className="cta-button">
            <Docs />
            تابع معنا
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
