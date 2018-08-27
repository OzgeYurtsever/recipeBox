import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "section">
        <form role="search">
          <div className="search-section">
            <input type="search" className="search-field" placeholder="Search the recipe..." />
            <button>Search</button>
          </div>
        </form>
      </div>
    );
  }

}

export default Search;