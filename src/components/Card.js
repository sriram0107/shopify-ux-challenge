import React from "react";
import Movie from "../movie.jpg";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import "../styles/search.css";

const Card = ({ ele, key, disabled, nominate, change }) => {
  return (
    <div key={key} className="card">
      <img
        className="poster"
        src={ele.Poster && ele.Poster != "N/A" ? ele.Poster.toString() : Movie}
      />
      <p>{ele.Title}</p>
      <i>{ele.Year}</i>
      {disabled ? (
        <RemoveCircleIcon className="delete" />
      ) : nominate ? (
        <AddCircleIcon onClick={() => change(ele)} className="add" />
      ) : (
        <RemoveCircleIcon onClick={() => change(ele)} className="delete" />
      )}
    </div>
  );
};

export default Card;
