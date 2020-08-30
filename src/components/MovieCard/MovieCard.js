import React, { useState } from "react";
import "./MovieCard.css";

function MovieCard() {
  const [cardText, setCardText] = useState("0");

  function handleMouseEnter(e) {
    setCardText("1");
  }

  function handleMouseLeave(e) {
    setCardText("0");
  }

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="movieCard"
    >
      <div style={{ opacity: cardText }} className="movieCard_items">
        <h2>Movie Name</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
          architecto.
        </p>
        <small>15 January 2020</small>
      </div>
    </div>
  );
}

export default MovieCard;
