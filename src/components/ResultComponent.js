import React from "react";
import "../styles/nominee.css";
import Card from "./Card";
import Placeholder from "./Placeholder";
import MovieItem from "./MovieItem";

const Result = ({ nominees, changeNominees, limit }) => {
  if (nominees.length == 0) {
    return (
      <div className="nominations">
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </div>
    );
  } else {
    const change = (movie) => {
      var new_arr = [...nominees];
      new_arr = new_arr.filter((m) => m != movie);
      changeNominees(new_arr);
    };
    var render_list = () => {
      var lst = nominees.map((movie, key) => {
        return (
          <MovieItem
            ele={movie}
            key={key}
            disabled={false}
            nominate={false}
            change={change}
          />
        );
      });
      for (var i = 0; i < limit - nominees.length; i++) {
        lst.push(<Placeholder />);
      }
      return lst;
    };
    return <div className="nominations">{render_list()}</div>;
  }
};
export default Result;
