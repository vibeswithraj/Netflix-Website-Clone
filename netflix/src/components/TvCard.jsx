import React from "react";
import {AiTwotoneHeart} from "react-icons/ai";

const TvCard = ({ img, name }) => {
  return (
    <>
      <div className="box">
        <img src={img} className="card" alt="img" />
        <h4>{name}</h4>
      </div>
      <div className="cover">
        <AiTwotoneHeart className="heart-icon"/>
      </div>
    </>
  );
};

export default TvCard;
