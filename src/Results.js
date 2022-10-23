import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";
import Synonyms from "./Synonyms";

function Results(props) {
  if (props.result == null) {
    return null;
  } else {
    return (
      <div>
        <div className="text-start m-3 p-3 rounded-2 shadow bg-light">
          <div className="display-2 mb-3">{props.result.word}</div>
          <div className="mx-3"></div>
          <div className="h2">
            <Phonetic phonetic={props.result} /> {props.result.phonetic}
          </div>
          <div>
            {props.result.meanings.map(function (synon, index) {
              if (synon.synonyms.length > 1) {
                return (
                  <div key={index}>
                    <Synonyms syn={synon.synonyms} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div className="text-start mx-3 p-3 rounded-2 shadow bg-light">
          <Meaning meaning={props.result.meanings} />
        </div>
      </div>
    );
  }
}

export default Results;
