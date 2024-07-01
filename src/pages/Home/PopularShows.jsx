import { RequestAPIData } from '../../api/RequestAPIData';

const PopularShows = () => {
  const endPoint = "tv/popular?language=id&page=1";

  return (
    <RequestAPIData title="Popular Shows" endPoint={endPoint}/>
  );
};
export default PopularShows;
