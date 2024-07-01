import { RequestAPIData } from '../../api/RequestAPIData';

const PopularMovies = () => {
  const endPoint = "movie/now_playing?with_original_language=id&with_original_country=ID";

  return (
    <RequestAPIData title="Popular Movies" endPoint={endPoint}/>
  );
};
export default PopularMovies;
