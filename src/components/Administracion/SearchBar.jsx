"use client";
import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Buscar..."
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf6dab26cd2d90d2f9327e00debfa4bf8bf3eee0"
        alt="Search"
        className="search-icon"
      />
      <style jsx>{`
        .search-container {
          position: relative;
          width: 484px;
          margin: 0 auto;
        }
        .search-input {
          width: calc(100% - 50px); /* Adjust width to make space for the button */
          height: 35px;
          border-radius: 10px;
          border: 4px solid #27034b;
          padding: 5px 10px;
          background-color: #fff;
        }
        .search-icon {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
        }
        @media (max-width: 640px) {
          .search-container {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchBar;