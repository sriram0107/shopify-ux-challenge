import React from "react";
import Movie from "../movie.jpg";

const Card = ({ ele, key, disabled, nominate, change }) => {
  return (
    <div key={key} className="card">
      <img
        className="poster"
        src={ele.Poster || ele.Poster === "N/A" ? ele.Poster.toString() : Movie}
        // src={ele.Poster ? ele.Poster.toString() : Movie}
      />
      <p>{ele.Title}</p>
      {disabled ? (
        <button disabled>Nominate</button>
      ) : nominate ? (
        <button onClick={() => change(ele)}>Nominate</button>
      ) : (
        <button onClick={() => change(ele)}>Delete</button>
      )}
    </div>
  );
};

export default Card;
