import React from 'react';

const Search = props => {
  return (
    <div className = "section">
      <form role="search">
        <div className="search-section">
          <input type="search" className="search-field" placeholder="Search the recipe..." onChange={props.onChange}/>
          <button onClick={props.onClick}>Search</button>
        </div>
      </form>
    </div>
  );
}

export default Search;