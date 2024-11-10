import Image from "next/image";

import EducationIcon from "../Svgs/EducationIcon/EducationIcon";
import { Button } from "../ui/button";
import ExperienceImage from "@/public/images/ExperienceImage.svg";

import "./EducationalExperience.css";

const EducationalExperience = () => {
  return (
    <section className="educational-experience">
      <div className="row">
        <div className="column">
          <div className="right-column">
            <Image
              src={ExperienceImage}
              alt="ExperienceImage"
              className="experienceImage"
            />
          </div>
        </div>
        <div className="column">
          <div className="left-column">
            <div className="experience-card">
              <h5 className="title">
                التجربة التعليمية في الأكاديمية العربية للبرمجة
              </h5>
              <p className="explanation">
                الأكاديمية العربية للبرمجة تقدم تجربة تعليمية مميزة وفريدة تركز
                على إنتاج فيديوهات تعليمية بعناصر تفاعلية وشاملة تناسب جميع
                الفئات العمرية والمستويات. نسعى لتمكين كل فرد من تعلم البرمجة
                بطريقة مبسطة وممتعة، مع مراعاة احتياجات المتعلمين وتقديم محتوى
                يلهمهم للتفوق والإبداع. سواء كنت مبتدئًا أو محترفًا، ستجد لدينا
                ما يلهمك ويطور مهاراتك في عالم البرمجة، مع دعم مستمر وموارد غنية
                تواكب أحدث التقنيات والأساليب التعليمية.
              </p>
              <div className="btn-wrapper">
                <Button className="educationButton">
                  <EducationIcon />
                  المسارات التعليمية
                </Button>
              </div>
            </div>
            <div className="btn-wrapper">
              <Button className="educationButton">
                <EducationIcon />
                المسارات التعليمية
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EducationalExperience;
