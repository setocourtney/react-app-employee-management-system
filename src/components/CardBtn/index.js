import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <button onClick={props.onClick} className={`btn btn-primary ${props["data-value"]}`} type="button" {...props}>{props["data-value"]}</button>
  );
}

export default CardBtn;
