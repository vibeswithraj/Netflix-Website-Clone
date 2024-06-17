import React from "react";
import TvCard from "./TvCard";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const imageUrl = "https://www.themoviedb.org/t/p/original";

const TvRow = ({ rowId, title, TvArr = [] }) => {
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
        {TvArr.map((item) => (
          <TvCard
            key={item?.id}
            img={`${imageUrl}${item?.poster_path}`}
            name={item?.name}
          />
        ))}
      </div>
      <FaChevronCircleRight className="arrow-right" onClick={handleScrollRight}
      />
    </div>
  );
};

export default TvRow;
