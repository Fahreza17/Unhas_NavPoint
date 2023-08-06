import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'
import './SearchBar.css';

const SearchBar = ({ searchQuery, handleSearchChange, placeholderText }) => {

  return (
    <div className="search-bar-container">
      <InputGroup className="mb-3">
        <FaSearch className="search-icon" />
        <FormControl
          placeholder={placeholderText}
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </InputGroup>
    </div>
  );
};

export default SearchBar;
