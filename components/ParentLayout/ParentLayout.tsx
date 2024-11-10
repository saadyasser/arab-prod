import React from "react";
import TextCard from "../TextCard/TextCard";
import ImageComponent from "../ImageComponent/ImageComponent";
import "./ParentLayout.css";

const ParentLayout: React.FC = () => {
  return (
    <div className="layout-section">
      <div className="card-section">
        <TextCard
          icon="/images/notes.png"
          title="اختبر قدراتك"
          description="تمكنك الأكاديمية العربية للبرمجة من اختبار مهاراتك البرمجية عبر الإنترنت بسهولة ومرونة. من خلال خدمة الامتحان البرمجي الإلكتروني"
        />
        <TextCard
          icon="/images/choice.png"
          title="قم بالاختيار"
          description="يمكنك اختيار اللغة البرمجية التي تود اختبار معرفتك بها، سواء كانت Python، Java، JavaScript أو أي لغة أخرى من اللغات المتاحة"
        />
        <TextCard
          icon="/images/certificant.png"
          title="اعرف ترتيبك"
          description="تيح لك لوحة الشرف معرفة ترتيبك بين الطلاب الذين اجتازوا الامتحان، مما يمنحك فرصة مميزة للتميز والإشادة بإنجازك أمام المجتمع الأكاديمي وزملائك"
        />
        <button className="explore-button">
        <img src="/images/check.png" alt="Explore Icon" className="button-icon" /> قسم الامتحانات</button>
      </div>
      <ImageComponent />
    </div>
  );
};

export default ParentLayout;
