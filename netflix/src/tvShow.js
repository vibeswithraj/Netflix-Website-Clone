import axios from "axios";

const popular_tvshow_url = "https://api.themoviedb.org/3/tv/popular";
const toprated_tvshow_url = "https://api.themoviedb.org/3/tv/top_rated";
const airing_url = "https://api.themoviedb.org/3/tv/airing_today";
const ontheair_url = "https://api.themoviedb.org/3/tv/on_the_air";
const api_key = "api_key=782fb7e5d8a30f745126ef919c679d55";

export const fectAllTvShowData = ({SetPopluarTvShow,SetTopRatedTvShow,SetAiringTvShow,SetOnTheAir}) => {
  const fetchpts = async () => {
    const {
      data: { results },
    } = await axios.get(`${popular_tvshow_url}?${api_key}`);
    SetPopluarTvShow(results);
  };
  fetchpts();

  const fetchtrts = async () => {
    const {
      data: { results },
    } = await axios.get(`${toprated_tvshow_url}?${api_key}`);
    SetTopRatedTvShow(results);
  };
  fetchtrts();

  const fetchairing = async () => {
    const {
      data: { results },
    } = await axios.get(`${airing_url}?${api_key}`);
    SetAiringTvShow(results);
  };
  fetchairing();

  const fetchota = async () => {
    const {
      data: { results },
    } = await axios.get(`${ontheair_url}?${api_key}`);
    SetOnTheAir(results);
  };
  fetchota();
};
