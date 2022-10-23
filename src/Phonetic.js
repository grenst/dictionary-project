import React from "react";

function Phonetic(props) {
  return (
    <div>
      {props.phonetic.phonetics[0].audio && (
        <a href={props.phonetic.phonetics[0].audio} target="_blank" rel="noreferrer">
          {" "}
          listen{" "}
        </a>
      )}
    </div>
  );
}

export default Phonetic;
