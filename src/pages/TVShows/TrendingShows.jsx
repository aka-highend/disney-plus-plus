import React from 'react'
import { RequestAPIData } from '../../api/RequestAPIData';

const TrendingShows = () => {
    const endPoint = "tv/popular?language=id&page=2";
  
  return (
    <RequestAPIData title='Trending Shows' endPoint={endPoint}/>
  )
}
export default TrendingShows;