import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function ButtonContainer(props) {
  return (
    <div>
      <span>Sort: </span>
      <CardBtn
        onClick={props.handleBtnClick}
        data-value="Name"
      />
      <span> </span>
      <CardBtn
        onClick={props.handleBtnClick}
        data-value="Location"
      />
    </div>
  );
}

export default ButtonContainer;
