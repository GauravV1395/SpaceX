import React from "react";

import "./Search.css";

const Search = (props) => {
  return (
    <input
      type="text"
      onChange={props.onChange}
      placeholder={props.placeholder}
      className="input search-field"
    />
  );
};

export default Search;
