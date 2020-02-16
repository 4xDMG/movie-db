import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { searchResultsActions } from '../../redux';
import { Logo } from '../../assets';
import './style.css';

function SearchHeader() {
  const dispatch = useDispatch();

  const onChange = useCallback(
    e => {
      if (e.target.value.length) {
        dispatch(searchResultsActions.fetchSearchResults(e.target.value));
      } else {
        dispatch(searchResultsActions.clearSearchResults());
      }
    },
    [dispatch],
  );

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

export default SearchHeader;
