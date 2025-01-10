import React, { useState } from "react";
import styles from "./AiTools.module.css";
import Header from "./components/Header";

const AiTools = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className={styles["ai-tools-container"]}>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default AiTools;
