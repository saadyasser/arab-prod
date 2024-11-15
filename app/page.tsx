import "./page.module.css";
import ParentLayout from "@/components/ParentLayout/ParentLayout";
import EducationalExperience from "@/components/EducationalExperience/EducationalExperience";
import InteractiveToolsSection from "@/components/InteractiveToolsSection/InteractiveToolsSection";
import Carousel from "@/components/Carousel/Carousel";

export default function Home() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
  return (
    <div>
      <ParentLayout />
      <EducationalExperience />
      <InteractiveToolsSection />
      <Carousel columns={4}>
        <div style={{ backgroundColor: "lightblue", height: "150px" }}>
          سعد 1
        </div>
        <div style={{ backgroundColor: "lightcoral", height: "150px" }}>
          سعد 2
        </div>
        <div style={{ backgroundColor: "lightgreen", height: "150px" }}>
          سعد 3
        </div>
        <div style={{ backgroundColor: "lightpink", height: "150px" }}>
          سعد 4
        </div>
        <div style={{ backgroundColor: "lightgray", height: "150px" }}>
          سعد 5
        </div>
      </Carousel>
    </div>
  );
}
