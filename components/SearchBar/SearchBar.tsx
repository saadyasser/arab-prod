import React from "react";
import SearchIcon from "../Svgs/SearchIcon/SearchIcon";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <div className="input-wrapper">
        <input type="text" placeholder="مقدمة لمحرك الألعاب اليونتي ....." />
      </div>
      <div className="search-icon">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
