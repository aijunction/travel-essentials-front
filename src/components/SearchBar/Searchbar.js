import React, { useState } from "react";
import products from "../../assets/json/Products.json";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const searchResults = products.filter((item) =>
      item["Title"]?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(searchResults);
  };

  return (
    <div className="search-bar-container">
      <span className="search-icon" onClick={handleSearchToggle}>
        <i className="fa fa-search" aria-hidden="true"></i>
      </span>
      {isSearchOpen && (
        <div className="overlay">
          <div className="search-overlay">
            <span className="close-icon" onClick={handleSearchToggle}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </span>
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search"
                className="form-control"
                id="search-input"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
