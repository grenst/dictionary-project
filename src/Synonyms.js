import React from "react";
import "./Synonyms.css";

function Synonyms(props) {
  return (
    <ul>
      {props.syn.map(function (synonym, index) {
        return (
          <li key={index} className="results">
            {synonym}
          </li>
        );
      })}
    </ul>
  );
}

export default Synonyms;
