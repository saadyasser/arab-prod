import "./page.module.css";
import ParentLayout from "@/components/ParentLayout/ParentLayout";
import InteractiveToolsSection from "@/components/InteractiveToolsSection/InteractiveToolsSection";

export default function Home() {
  return (
    <div>
      <ParentLayout />
      <InteractiveToolsSection />
    </div>
  );
}
