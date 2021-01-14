import React, { useState } from "react";
import "../styles/search.css";
import SearchIcon from "@material-ui/icons/Search";

const Search = (props) => {
  const [movie, changeMovie] = useState("");
  const change = (e) => {
    changeMovie(e.target.value);
  };
  const select = () => {
    //make API call and send json to main for further processing
    const url = `https://www.omdbapi.com/?s=${movie}&apikey=3e37378`;
    props.changeLoading(true);
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        props.changeLoading(false);
        console.log(data);
        var new_arr = [];
        data.Search.forEach((res) => {
          new_arr.push(res);
        });
        props.changeSearch(new_arr);
      })
      .catch((err) => console.log("err", err));
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
      <SearchIcon
        fontSize="large"
        onClick={() => select()}
        className="search_icon"
      />
    </div>
  );
};

export default Search;
