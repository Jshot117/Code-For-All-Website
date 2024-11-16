import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ searchQuery, handleSearchChange, inputDisabled }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Search for a Discord/Leetcode username..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
        disabled={inputDisabled}
      />
      <FaSearch
        className="search-icon"
        onClick={() => {
          if (searchQuery.trim() !== "") {
            handleSearchChange({ target: { value: searchQuery } });
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
