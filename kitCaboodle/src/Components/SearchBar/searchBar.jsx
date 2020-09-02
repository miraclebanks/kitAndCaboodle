import React from "react";
import "./seachbar.styles.css";

const SearchBar = ({ placeholder, handleChange }) => (
  <input type="search" placeholder={placeholder} onChange={handleChange} />
);

export default SearchBar;
