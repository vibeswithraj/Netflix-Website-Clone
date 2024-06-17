import React, { useEffect, useState } from "react";
import "../components/Movies.scss";
import Row from "./Header/Row";
import Loader from "../components/Loader";
import { fecthAllMovies } from "../movies";

export const MovieCard = ({ img, name }) => (
  <div className="box">
    <img src={img} className="card" alt="img" />
    <h4>{name}</h4>
  </div>
);

const Movies = () => {
  const [popularMovies, setpopularmovies] = useState([]);
  const [nowPlayingMovies, setnowplayingmovies] = useState([]);
  const [topRatedMovies, settopratedmovies] = useState([]);
  const [upcomingMovies, setupcomingmovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fecthAllMovies({
      setpopularmovies,
      setnowplayingmovies,
      settopratedmovies,
      setupcomingmovies,
    })
    setLoading(false);
  }, []);

  return (
    <section className="home">
      <div className="banner">
        <h1>Movies</h1>
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
          <Row rowId={"1"} title={"Upcoimg Movies"} arr={upcomingMovies} />
        </>
      )}
      {loading ? (
        <Loader />
      ) : (
        <>
          <Row rowId={"2"} title={"Popular Movies"} arr={popularMovies} />
        </>
      )}
      {loading ? (
        <Loader />
      ) : (
        <>
          <Row rowId={"3"} title={"Now Playing Movies"} arr={nowPlayingMovies} />
        </>
      )}
      {loading ? (
        <Loader />
      ) : (
        <>
          <Row rowId={"4"} title={"Top Rated Movies "} arr={topRatedMovies} />
        </>
      )}
    </section>
  );
};

export default Movies;
