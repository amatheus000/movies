import React from "react";

const Movie = (props) => {
  const { title, image } = props;
  return (
    <div className="movie">
      <h2>{title}</h2>
      <img src={image} alt={title} />
    </div>
  );
};

export default Movie;