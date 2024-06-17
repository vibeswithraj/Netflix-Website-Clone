import React from "react";
import "../../components/Movies.scss";
import { MovieCard } from "../Movies";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const imageUrl = "https://image.tmdb.org/t/p/original";

const Row = ({rowId, title, arr = [] }) => {

    const handleScrollLeft = () => {
      const slider = document.getElementById(`slider` + rowId);
      slider.scrollLeft = slider.scrollLeft - 1300;
    };
    const handleScrollRight = () => {
      const slider = document.getElementById(`slider` + rowId);
      slider.scrollLeft = slider.scrollLeft + 1300;
    };  

  return (
    <div className="row">
      <h2>{title}</h2>
      <FaChevronCircleLeft className="arrow-left" onClick={handleScrollLeft} />
      <div id={`slider` + rowId}>
        {arr.map((item) => (
          <MovieCard
            key={item?.id}
            img={`${imageUrl}/${item?.poster_path}`}
            name={item?.original_title}
          />
        ))}
      </div>
      <FaChevronCircleRight className="arrow-right" onClick={handleScrollRight} />
    </div>
  );
};

export default Row;
