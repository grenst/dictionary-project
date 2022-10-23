import React from "react";
import "./Phonetic.css";

function Phonetic(props) {
  return (
    <span>
      {props.phonetic.phonetics[0].audio && (
        <a
          href={props.phonetic.phonetics[0].audio}
          className="link text-center px-1 py-1"
          target="_blank"
          rel="noreferrer"
        >
          🔊
        </a>
      )}
    </span>
  );
}

export default Phonetic;
