import React from 'react'
import { RequestAPIData } from '../../api/RequestAPIData';

const CrimeShows = () => {
    const endPoint = "discover/tv?language=id&with_genres=80&with_origin_country=ID&with_original_language=id";
  
  return (
    <RequestAPIData title='Crime Shows' endPoint={endPoint}/>
  )
}
export default CrimeShows;