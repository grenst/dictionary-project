import axios from "axios";
import React, { useState } from "react";
import Photos from "./Photos";
import Results from "./Results";

function Dictionary() {
  const [key, setKey] = useState("sunset");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${key}`;
    axios.get(apiUrl).then(handleResponse);

    const keyApi = "563492ad6f9170000100000169e5aaad582d41f79ac548230b02b520";
    let url = `https://api.pexels.com/v1/search?query=${key}&per_page=1`;
    let headers = { Authorization: `Bearer ${keyApi}` };
    axios.get(url, { headers: headers }).then(handlePexelsResponse);
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
        <div className="text-start mx-3 p-3 rounded-2 shadow bg-light my-4">
          <Photos data={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

export default Dictionary;
