import React from "react";
import SearchIcon from "../Svgs/SearchIcon/SearchIcon";
import "./SearchBar.css";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  placeholder,
}) => {
  return (
    <div className="searchbar">
      <div className="input-wrapper">
        <input
          type="search"
          placeholder={placeholder}
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
