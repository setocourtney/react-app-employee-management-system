import React from "react";
import "./style.css";
import UserCard from "../UserCard";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.login.uuid} className="list-group-item">
          <img alt="User" src={result.picture.large} className="img-fluid float-left" />
          <UserCard results={result} />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
