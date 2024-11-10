import "./page.module.css";
import ParentLayout from "@/components/ParentLayout/ParentLayout";
import EducationalExperience from "@/components/EducationalExperience/EducationalExperience";
import InteractiveToolsSection from "@/components/InteractiveToolsSection/InteractiveToolsSection";

export default function Home() {
  return (
    <div>
      <ParentLayout />
      <EducationalExperience />
      <InteractiveToolsSection />
    </div>
  );
}
