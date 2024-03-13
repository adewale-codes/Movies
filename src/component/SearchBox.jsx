import React from "react";

const SearchBox = (props) => {
  return (
    <>
      <div className="search">
        <input
          value={props.value}
          onChange={(event) => {
            props.setSearchValue(event.target.value);
          }}
          className="form-control"
          placeholder="Search"
        />
      </div>
    </>
  );
};

export default SearchBox;
