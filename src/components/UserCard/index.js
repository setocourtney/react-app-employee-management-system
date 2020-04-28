import React from "react";
import "./style.css";

function UserCard(props) {

  if (props.results) {
    return (
      <div className="data-card">
        <p><strong>Name:</strong> {props.results.name.first} {props.results.name.last}</p>
        <p><strong>State:</strong> {props.results.location.state}</p>
        <p><strong>Gender:</strong> {props.results.gender}</p>
      </div>
    );
  } else {
    return (<div></div>);
  }
}

export default UserCard;
