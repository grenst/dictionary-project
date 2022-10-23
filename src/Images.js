import axios from "axios";
import React, { useState } from "react";
import Photos from "./Photos";

function Images(props) {
  let [photos, setPhotos] = useState(null);

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  const keyApi = "563492ad6f9170000100000169e5aaad582d41f79ac548230b02b520";

  let url = `https://api.pexels.com/v1/search?query=${props}&per_page=1`;

  let headers = { Authorization: `Bearer ${keyApi}` };

  axios.get(url, { headers: headers }).then(handlePexelsResponse);

  //api.pexels.com/v1/search
  return (
    <div>
      <Photos data={photos} />
    </div>
  );
}

export default Images;
