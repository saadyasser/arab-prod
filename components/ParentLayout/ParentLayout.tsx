import React from "react";
import TextCard from "../TextCard/TextCard";
import ImageComponent from "../ImageComponent/ImageComponent";
import "./ParentLayout.css";
import { Button } from "@chakra-ui/react";
import ExamsSectionIcon from "../Svgs/ExamsSectionIcon/ExamsSectionIcon";
import TestAbilitiesIcon from "../Svgs/TestAbilitiesIcon/TestAbilitiesIcon";
import MakeChoiceIcon from "../Svgs/MakeChoiceIcon/MakeChoiceIcon";
import KnowRankingIcon from "../Svgs/KnowRankingIcon/KnowRankingIcon";

const ParentLayout: React.FC = () => {
  return (
    <div className="layout-section">
      <ImageComponent />
      <div className="card-section">
        <TextCard
          icon={TestAbilitiesIcon}
          title="اختبر قدراتك"
          description="تمكنك الأكاديمية العربية للبرمجة من اختبار مهاراتك البرمجية عبر الإنترنت بسهولة ومرونة. من خلال خدمة الامتحان البرمجي الإلكتروني"
        />
        <TextCard
          icon={MakeChoiceIcon}
          title="قم بالاختيار"
          description="يمكنك اختيار اللغة البرمجية التي تود اختبار معرفتك بها، سواء كانت Python، Java، JavaScript أو أي لغة أخرى من اللغات المتاحة"
        />
        <TextCard
          icon={KnowRankingIcon}
          title="اعرف ترتيبك"
          description="تيح لك لوحة الشرف معرفة ترتيبك بين الطلاب الذين اجتازوا الامتحان، مما يمنحك فرصة مميزة للتميز والإشادة بإنجازك أمام المجتمع الأكاديمي وزملائك"
        />
        <div className="btn-wrapper">
          <Button className="explore-button">
            <ExamsSectionIcon />
            قسم الامتحانات
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ParentLayout;
