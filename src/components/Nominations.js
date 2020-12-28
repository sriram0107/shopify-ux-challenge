import React from "react";
import "../styles/nominee.css";
import Card from "./Card";

const Nominations = ({ result, nominees, changeNominees, limit }) => {
  const change = (res) => {
    var new_arr = [...nominees];
    new_arr.push(res);
    changeNominees(new_arr);
  };
  const check_item = (res) => {
    return nominees.map((n) => n.imdbID).includes(res.imdbID);
  };

  if (result) {
    const result_list = result.map((res, key) => {
      return (
        <Card
          ele={res}
          key={key}
          disabled={nominees.length >= limit || check_item(res)}
          nominate={true}
          change={change}
        />
      );
    });
    return <div className="search_results">{result_list}</div>;
  } else {
    return <div></div>;
  }
};

export default Nominations;
