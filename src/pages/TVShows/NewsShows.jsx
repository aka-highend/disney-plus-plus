import React from 'react'
import { RequestAPIData } from '../../api/RequestAPIData';

const NewsShows = () => {
    const endPoint = "discover/tv?with_genres=10763";
  
  return (
    <RequestAPIData title='News Shows' endPoint={endPoint}/>
  )
}
export default NewsShows;