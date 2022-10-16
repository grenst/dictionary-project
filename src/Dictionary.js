import React, { useState } from "react";

function Dictionary() {
  const [key, setKey] = useState();

  function submit(event) {
    event.preventDefault();
    alert(`Hello there ${key}`);
  }

  function handleChangeKey(e) {
    console.log(e.target.value);
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
