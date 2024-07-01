import React from 'react'
import { RequestAPIData } from '../../api/RequestAPIData';

const WesternShows = () => {
  const endPoint = "discover/tv?with_genres=37";
  
  return (
    <RequestAPIData title='Western Shows' endPoint={endPoint}/>
  )
}
export default WesternShows;