import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";

function Dictionary() {
  const [key, setKey] = useState();
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function submit(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${key}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChangeKey(e) {
    setKey(e.target.value);
  }

  return (
    <div>
      <form>
        <input type="search" className="inputGroup-sizing-sm" onChange={handleChangeKey} />
        <input type="submit" value="Search" onClick={submit} />
      </form>
      <Results result={results} />
    </div>
  );
}

export default Dictionary;
