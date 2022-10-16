import axios from "axios";
import React, { useState } from "react";

function Dictionary() {
  const [key, setKey] = useState();

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function submit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${key}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChangeKey(e) {
    setKey(e.target.value);
  }

  return (
    <div>
      <form action={submit}>
        <input type="search" className="inputGroup-sizing-sm" onChange={handleChangeKey} />
        <input type="submit" value="Search" onClick={submit} />
      </form>
    </div>
  );
}

export default Dictionary;
