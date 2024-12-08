import "./page.module.css";
import ParentLayout from "@/components/ParentLayout/ParentLayout";
import EducationalExperience from "@/components/EducationalExperience/EducationalExperience";
import InteractiveToolsSection from "@/components/InteractiveToolsSection/InteractiveToolsSection";
import UsersReviews from "@/sections/UsersReviews/UsersReviews";
import Carousel from "@/components/Carousel/Carousel";
import TrainingCourses from "@/sections/TrainingCourses/TrainingCourses";
import CardCarousel from "@/components/CardCarousel/CardCarousel";
import Video from "@/components/Video/Video";

export default function Home() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
  return (
    <div>
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
