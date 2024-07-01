import React from 'react'
import { RequestAPIData } from '../../api/RequestAPIData';

const ComedyShows = () => {
    const endPoint = "discover/tv?language=id&with_genres=35&with_origin_country=US&with_original_language=en";
  
  return (
    <RequestAPIData title='Comedy Shows' endPoint={endPoint}/>
  )
}
export default ComedyShows;