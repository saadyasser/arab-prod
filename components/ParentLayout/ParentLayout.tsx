import React from "react";
import Card from "../Card/Card";
import ImageComponent from "../ImageComponent/ImageComponent";
import "./ParentLayout.css";

const ParentLayout: React.FC = () => {
    const images = ["/image1.jpg", "/image2.jpg"];
    const cards = [
      {
        icon: "/icon1.png",
        title: "تحسين قدراتك",
        description: "هذا وصف تفصيلي حول كيفية تحسين القدرات بطريقة فعالة ومستمرة."
      },
      {
        icon: "/icon2.png",
        title: "ابقَ على اطلاع",
        description: "هذا وصف حول البقاء على اطلاع بآخر التحديثات والموارد المتاحة."
      },
      {
        icon: "/icon3.png",
        title: "توسيع معرفتك",
        description: "هذا وصف حول كيفية توسيع المعرفة وتطوير المهارات الشخصية."
      }
    ];
  
    return (
      <div className="layout-section">
        <div className="card-section">
          {cards.map((card, index) => (
            <Card key={index} icon={card.icon} title={card.title} description={card.description} />
          ))}
          <button className="explore-button">قم باستكشاف الدورات</button>
        </div>
        <div className="image-section-wrapper">
          <ImageComponent images={images} />
        </div>
      </div>
    );
  };

export default ParentLayout;
