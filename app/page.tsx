import "./page.module.css";
import ParentLayout from "@/components/ParentLayout/ParentLayout";
import EducationalExperience from "@/components/EducationalExperience/EducationalExperience";
import InteractiveToolsSection from "@/components/InteractiveToolsSection/InteractiveToolsSection";
import UsersReviews from "@/sections/UsersReviews/UsersReviews";
import TrainingCourses from "@/sections/TrainingCourses/TrainingCourses";
import CardCarousel from "@/components/CardCarousel/CardCarousel";
import HeroSection from "@/sections/HeroSection/HeroSection";
import Video from "@/components/Video/Video";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CardCarousel />
      <Video />
      <TrainingCourses />
      <ParentLayout />
      <EducationalExperience />
      <InteractiveToolsSection />
      <UsersReviews />
    </div>
  );
}
