import React from 'react'
import { RequestAPIData } from '../../api/RequestAPIData';

const RealityShows = () => {
    const endPoint = "discover/tv?language=id&with_genres=10764&with_origin_country=ID&with_original_language=id";
  
  return (
    <RequestAPIData title='Reality Shows' endPoint={endPoint}/>
  )
}
export default RealityShows;