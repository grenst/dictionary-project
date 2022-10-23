import React from "react";
import Synonyms from "./Synonyms";

function Meaning(props) {
  return (
    <div>
      {props.meaning.map(function (info, index) {
        return (
          <div key={index}>
            <h2>{info.partOfSpeech}</h2>
            <div>
              {info.definitions.map(function (defin, index) {
                return (
                  <div key={index}>
                    <strong>Definition: </strong>
                    {defin.definition}
                    <br />
                    <strong>Example: </strong>
                    {defin.example}
                    {defin.synonyms.length > 0 && <Synonyms syn={defin.synonyms} />}
                  </div>
                );
              })}
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Meaning;
