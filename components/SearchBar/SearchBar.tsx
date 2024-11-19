import React from "react";
import SearchIcon from "../Svgs/SearchIcon/SearchIcon";
import "./SearchBar.css";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="searchbar">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="مقدمة لمحرك الألعاب اليونتي ....."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="search-icon">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
