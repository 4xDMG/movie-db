import React from 'react';
import { func } from 'prop-types';
import { Logo } from '../../assets';
import './style.css';

function SearchHeader({ onChange }) {
  return (
    <header className="search-header">
      <div className="decorative-line line-1" />
      <div className="decorative-line line-2" />
      <div className="decorative-line line-3" />
      <div className="decorative-line line-4" />
      <div className="decorative-line line-5" />
      <div className="decorative-line line-6" />
      <Logo />
      <input
        className="search-input"
        placeholder="Search"
        onChange={onChange}
      />
    </header>
  );
}

SearchHeader.propTypes = {
  onChange: func.isRequired,
};

export default SearchHeader;
