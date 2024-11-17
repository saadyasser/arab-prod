import "./page.module.css";
import ParentLayout from "@/components/ParentLayout/ParentLayout";
import EducationalExperience from "@/components/EducationalExperience/EducationalExperience";
import InteractiveToolsSection from "@/components/InteractiveToolsSection/InteractiveToolsSection";
import UsersReviews from "@/components/UsersReviews/UsersReviews";

export default function Home() {
  return (
    <div>
      <ParentLayout />
      <EducationalExperience />
      <InteractiveToolsSection />

      <UsersReviews />
    </div>
  );
}
