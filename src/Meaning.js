import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

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
                    {defin.definition}
                    <br />
                    <div className="section">
                      <span className="example">{defin.example}</span>
                      {defin.synonyms.length > 0 && <Synonyms syn={defin.synonyms} />}
                    </div>
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
