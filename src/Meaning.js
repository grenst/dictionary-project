import React, { useState } from "react";

function Meaning(props) {
  const [trac, setTrac] = useState(0);
  console.log(props.meaning);
  return (
    <div>
      {props.meaning.map(function (info, index) {
        console.log(info);
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
