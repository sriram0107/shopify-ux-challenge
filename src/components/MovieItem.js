import React from "react";
import Movie from "../movie.jpg";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import "../styles/placeholder.css";

const MovieItem = ({ ele, key, disabled, nominate, change }) => {
  return (
    <div
      className="movie_item"
      style={{
        backgroundImage: `url(
          ${ele.Poster && ele.Poster != "N/A" ? ele.Poster.toString() : Movie}
        )`,
      }}
    >
      <CancelIcon onClick={() => change(ele)} className="delete" />
    </div>
  );
};

export default MovieItem;
