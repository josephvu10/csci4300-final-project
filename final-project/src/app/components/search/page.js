import React from "react";
import "./SearchBar.css";  

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." />
      <button type="submit">Search</button>
    </div>
  );
};


export default SearchBar;