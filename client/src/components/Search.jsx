import React from 'react';

var Search = (props) => (
  <div className="search-bar form-inline">
      <input className="form-control" type="text" />
        <button className="btn hidden-sm-down" type="submit" name="search" onClick={props.handleSearchView}>Search
          <span className="glyphicon glyphicon-search"></span>
        </button>
      <button name="home" onClick={props.handleSearchView}>Cancel</button>

  </div>
);

export default Search;