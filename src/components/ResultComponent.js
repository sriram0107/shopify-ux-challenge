import React from "react";
import "../styles/nominee.css";
import Card from "./Card";
import Placeholder from "./Placeholder";

const Result = ({ nominees, changeNominees, limit }) => {
  if (nominees.length == 0) {
    return (
      <div className="nominations">
        <Placeholder no={0} />
      </div>
    );
  } else {
    const change = (movie) => {
      var new_arr = [...nominees];
      new_arr = new_arr.filter((m) => m != movie);
      changeNominees(new_arr);
    };
    var render_list = nominees.map((movie, key) => {
      return (
        <Card
          ele={movie}
          key={key}
          disabled={false}
          nominate={false}
          change={change}
        />
      );
    });
    return <div className="nominations">{render_list}</div>;
  }
};
export default Result;
