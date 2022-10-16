import React from "react";

function Meaning(props) {
  return (
    <div>
      {props.meaning.map(function (info, index) {
        return (
          <div key={index}>
            <h2>{info.partOfSpeech}</h2>
            <p>
              {info.definitions.map(function (defin, index) {
                return <div key={index}>{defin.definition}</div>;
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Meaning;
