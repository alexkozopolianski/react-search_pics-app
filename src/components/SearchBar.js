import React, { useState, useEffect } from "react";

const SearchBar = (props) => {
  const [term, setTerms] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    props.onSubmit(term);
  };
  return (
    <div
      className="ui segment"
      style={{
        background: "#000000",
        background: "-webkit-linear-gradient(to right, #434343, #000000)",
        background: "linear-gradient(to right, #434343, #000000)",
      }}
    >
      <form onSubmit={onFormSubmit} className="ui field">
        <div className="field">
          <label style={{ color: "white" }}>Image Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerms(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
