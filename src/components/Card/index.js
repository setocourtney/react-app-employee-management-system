import React from "react";
import "./style.css";

function Card(props) {
  console.log(props);
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.results ? `url(${props.results.picture.large})` : "none"
      }}
    >
    </div>
  );
}

export default Card;
