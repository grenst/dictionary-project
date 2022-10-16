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
      <form className="row gap-2 mx-3 p-3 rounded-2 shadow bg-light">
        <input
          type="search"
          className="col-8 form-control w-75 d-sm-block"
          onChange={handleChangeKey}
          placeholder="input the word"
        />
        <input type="submit" className="btn btn-primary col" value="Search" onClick={submit} />
      </form>
      <Results result={results} />
    </div>
  );
}

export default Dictionary;
