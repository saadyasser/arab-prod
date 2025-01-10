import React from "react";
import styles from "../AiTools.module.css";
import { AiToolsType } from "@/types/aiTools";

type AiToolsListProps = {
  loading: boolean;
  error: string | null;
  data: AiToolsType[] | undefined;
};

const AiToolsList: React.FC<AiToolsListProps> = ({ loading, error, data }) => {
  if (loading) return <div className={styles["loading"]}>تحميل...</div>;

  if (error) return <div className={styles["error"]}>Error: {error}</div>;

  return (
    <div className={styles["ai-tools-list"]}>
      {data?.map((item) => (
        <div key={item.tool_id}>
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default AiToolsList;
