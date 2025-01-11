import styles from "./AiTools.module.css";
import AiToolsWrapper from "@/sections/AiToolsWrapper/AiToolsWrapper";

interface AiToolsProps {
  searchParams: {
    search?: string; // The search parameter can be a string or undefined
    initialPage?: number;
  };
}

const AiTools: React.FC<AiToolsProps> = ({
  searchParams: { search, initialPage },
}) => {
  return (
    <div className={styles["ai-tools-container"]}>
      <AiToolsWrapper initialSearchTerm={search} initialPage={initialPage} />
    </div>
  );
};

export default AiTools;
