import { RequestAPIData } from "../../api/RequestAPIData";

const TopRatedShows = () => {
  const endPoint = "tv/top_rated";
  
  return (
    <RequestAPIData title="Top Rated Series" endPoint={endPoint}/>
  );
};
export default TopRatedShows;
