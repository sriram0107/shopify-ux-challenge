import React, { useState, useEffect } from "react";
import "../styles/search.css";
const Search = (props) => {
  const [movie, changeMovie] = useState("");
  const change = (e) => {
    changeMovie(e.target.value);
  };
  const select = () => {
    //make API call and send json to main for further processing
    const url = `http://www.omdbapi.com/?s=${movie}&apikey=3e37378`;
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        var new_arr = [];
        data.Search.forEach((res) => {
          new_arr.push(res);
        });
        props.changeSearch(new_arr);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="search">
      <input
        type="text"
        className="searchbar"
        placeholder="Search for your favorite movies"
        value={movie}
        onChange={(e) => change(e)}
        required
      />
      <button class="select" onClick={() => select()}></button>
      {/* <SearchIcon /> */}
    </div>
  );
};

export default Search;
