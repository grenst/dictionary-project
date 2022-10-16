import React from "react";
import Meaning from "./Meaning";

function Results(props) {
  if (props.result == null) {
    return null;
  } else {
    return (
      <div>
        <div className="text-start m-3 p-3 rounded-2 shadow bg-light">
          <div className="display-2">{props.result.word}</div>
          <div className="mx-3"></div>
          <div className="h2">
            phonetic:
            <span className="display-5"> {props.result.phonetic}</span>
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
