import React from "react";
import "./InteractiveToolsSection.css";
import Card from "../Card/Card";
import { Button } from "../ui/button";
import PhoneIcon from "../Svgs/phoneIcon/PhoneIcon";

const InteractiveToolsSection = () => {
  return (
    <section className="interactive-section">
      <Card>
        <h2>أدوات تفاعلية والعاب تعليمية</h2>
        <p className="card-description">
          تتميز الأكاديمية العربية للبرمجة بتطوير أدوات تفاعلية وألعاب تعليمية
          مبتكرة باستخدام أساليب الـتلعيب Gamification، مما يجعل عملية التعلم
          أكثر متعة وجاذبية. نقدم حلولًا مخصصة تلبي احتياجات المؤسسات والشركات،
          حيث نساعد في تصميم تجارب تعليمية تفاعلية تعزز من تفاعل المستخدمين
          وتحفزهم على التعلم بطرق غير تقليدية. سواء كنت تبحث عن تطوير مهارات
          فريق العمل أو تقديم تجربة تعليمية فريدة لعملائك، الأكاديمية العربية
          للبرمجة هي شريكك المثالي لتحقيق هذه الأهداف بنجاح.
        </p>
        <div className="btn-wrapper">
          <Button className="button">
            تواصل معنا
            <PhoneIcon />
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default InteractiveToolsSection;
