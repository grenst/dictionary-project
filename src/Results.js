import React from "react";
import Meaning from "./Meaning";

function Results(props) {
  if (props.result == null) {
    return <div>Hello Error</div>;
  } else {
    return (
      <div>
        <div className="display-2">{props.result.word}</div>
        <div className="text-start mx-3">
          <h3>Phonetic: </h3>
          <strong>{props.result.phonetic}</strong>
          <Meaning meaning={props.result.meanings} />
        </div>
      </div>
    );
  }
}

export default Results;
