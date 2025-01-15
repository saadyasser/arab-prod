import React from "react";
import styles from "../AiTools.module.css";
import CardAi from "@/app/ai-tools/components/CardAi/CardAi";
import { AiToolsType } from "@/types/aiTools";
import LoadingCardAi from "./LoadingCardAi/LoadingCardAi";

type AiToolsListProps = {
  loading: boolean;
  error: string | null;
  data: AiToolsType[] | undefined;
};

const AiToolsList: React.FC<AiToolsListProps> = ({ loading, error, data }) => {
  if (loading)
    return (
      <div className={styles["ai-tools-list"]}>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <LoadingCardAi />
        ))}
      </div>
    );

  if (error) return <div className={styles["error"]}>Error: {error}</div>;

  return (
    <div className={styles["ai-tools-list"]}>
      {data?.map((item) => (
        <CardAi
          key={item.tool_id}
          tool={item}
          image="/images/AiBackground.png"
        />
      ))}
    </div>
  );
};

export default AiToolsList;
