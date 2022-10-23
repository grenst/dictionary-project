import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";

function Dictionary() {
  const [key, setKey] = useState("up");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${key}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChangeKey(e) {
    setKey(e.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div>
        <form className="row gap-2 mx-3 p-3 rounded-2 shadow bg-light">
          <input
            type="search"
            className="col-8 form-control w-75 d-sm-block"
            onChange={handleChangeKey}
            placeholder="input the word"
          />
          <input type="submit" className="btn btn-primary col" value="Search" onClick={handleSubmit} />
        </form>
        <Results result={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

export default Dictionary;
