import { RequestAPIData } from "../../api/RequestAPIData";

const TopRatedMovies = () => {
  const endPoint = "movie/top_rated?with_original_language=id&with_original_country=ID&page=1";

  return (
    <RequestAPIData title="Top Rated Movies" endPoint={endPoint}/>
  );
};
export default TopRatedMovies;
