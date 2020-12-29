import React from "react";
import Movie from "../movie.jpg";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import "../styles/placeholder.css";

const MovieItem = ({ ele, key, disabled, nominate, change, confirm }) => {
  return (
    <div
      className="movie_item"
      style={{
        backgroundImage: `url(
          ${ele.Poster && ele.Poster != "N/A" ? ele.Poster.toString() : Movie}
        )`,
      }}
    >
      {confirm ? (
        <CheckCircleIcon style={{ color: "rgb(75, 189, 136)" }} />
      ) : (
        <CancelIcon onClick={() => change(ele)} className="delete" />
      )}
    </div>
  );
};

export default MovieItem;
