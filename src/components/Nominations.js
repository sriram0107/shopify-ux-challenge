import React from "react";
import "../styles/nominee.css";
import Card from "./Card";

const Nominations = ({ result, nominees, changeNominees }) => {
  const change = () => {
    var new_arr = [...nominees];
    new_arr.push(result);
    console.log(new_arr);
    changeNominees(new_arr);
  };
  if (result) {
    return (
      <div className="search_results">
        <div className="card">
          <img className="poster" src={result.Poster.toString()} />
          <h2>{result.Title}</h2>
          <button onClick={() => change()}>Nominate</button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Nominations;
