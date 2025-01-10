import React from "react";
import styles from "../AiTools.module.css";
import SearchBar from "@/components/SearchBar/SearchBar";
import FavoriteIcon from "@/components/Svgs/FavoriteIcon/FavoriteIcon";
import { Button } from "@/components/ui/button";

type HeaderProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className={styles["ai-tools-header"]}>
      <Button className={styles["btn-favorite"]}>
        المفضلة
        <FavoriteIcon />
      </Button>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default Header;
