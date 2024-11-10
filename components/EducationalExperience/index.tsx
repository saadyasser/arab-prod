import Image from "next/image";

import "./EducationalExperience.css";

import ExperienceImage from "@/public/images/ExperienceImage.svg";

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
          <div className="left-column">left column</div>
        </div>
      </div>
    </section>
  );
};
export default EducationalExperience;
