import axios from "axios";

const api_key = "782fb7e5d8a30f745126ef919c679d55";
const url = "https://api.themoviedb.org/3/movie";
const popular = "popular";
const nowPlaying = "now_playing";
const topRated = "top_rated";
const upcoming = "upcoming";

export const fecthAllMovies = ({
  setpopularmovies,
  setnowplayingmovies,
  settopratedmovies,
  setupcomingmovies,
}) => {
  const FetchPopularMovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${url}/${popular}?api_key=${api_key}`);
    setpopularmovies(results);
  };
  FetchPopularMovies();

  const FetchnowplayingMovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${url}/${nowPlaying}?api_key=${api_key}`);
    setnowplayingmovies(results);
  };
  FetchnowplayingMovies();

  const FetchtopratedMovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${url}/${topRated}?api_key=${api_key}`);
    settopratedmovies(results);
  };
  FetchtopratedMovies();

  const FetchupcomingMovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${url}/${upcoming}?api_key=${api_key}`);
    setupcomingmovies(results);
  };
  FetchupcomingMovies();
};
