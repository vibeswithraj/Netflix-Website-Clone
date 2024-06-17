import React, { useEffect, useState } from "react";
import TvRow from "./TvRow";
import Loader from "../components/Loader";
import { fectAllTvShowData } from "../tvShow.js";

const TvShow = () => {
  const [PopularTvShow, SetPopluarTvShow] = useState([]);
  const [TopRatedTvShow, SetTopRatedTvShow] = useState([]);
  const [Aring, SetAiringTvShow] = useState([]);
  const [Ota, SetOnTheAir] = useState([]);
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    fectAllTvShowData({SetPopluarTvShow,SetTopRatedTvShow,SetAiringTvShow,SetOnTheAir});
    SetLoading(false);
  }, []);

  return (
    <section className="home">
      <div className="banner">
        <h1 style={{ fontWeight: "600" }}>Tv Show</h1>
        <p>
          Movies move us like nothing else can, whether they’re scary, funny,
          dramatic, romantic or anywhere in-between. So many titles, so much to
          experience.
        </p>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <TvRow rowId={"1"} title={"Popular"} TvArr={PopularTvShow} />
        </>
      )}
      {loading ? (
        <Loader />
      ) : (
        <>
          <TvRow rowId={"2"} title={"Top Rated"} TvArr={TopRatedTvShow} />
        </>
      )}
      {loading ? (
        <Loader />
      ) : (
        <>
          <TvRow rowId={"3"} title={"Airing"} TvArr={Aring} />
        </>
      )}
      {loading ? (
        <Loader />
      ) : (
        <>
          <TvRow rowId={"4"} title={"On The Air"} TvArr={Ota} />
        </>
      )}
    </section>
  );
};

export default TvShow;
