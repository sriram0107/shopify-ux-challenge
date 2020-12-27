import React from "react";
import PropTypes from "prop-types";

const Card = ({ ele, key, disabled, nominate, change }) => {
  return (
    <div>
      <div key={key} className="card">
        <img className="poster" src={ele.Poster.toString()} />
        <h2>{ele.Title}</h2>
        {disabled ? (
          <button disabled>Nominate</button>
        ) : nominate ? (
          <button onClick={() => change(ele)}>Nominate</button>
        ) : (
          <button>Delete</button>
        )}
      </div>
    </div>
  );
};

export default Card;
