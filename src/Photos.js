import React from "react";

function Photos(props) {
  if (props.data) {
    console.log(props.data);
    return (
      <section className="Photos">
        <div className="row">
          {props.data.map(function (photo, index) {
            return (
              <div className="col-4">
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.landscape} className="img-fluid" key={index} alt="" />;
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

export default Photos;
