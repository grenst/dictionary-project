import React from "react";

function Synonyms(props) {
  return (
    <ul>
      Synonyms:
      {props.syn.map(function (synonym, index) {
        return <li key={index}>{synonym}</li>;
      })}
    </ul>
  );
}

export default Synonyms;
