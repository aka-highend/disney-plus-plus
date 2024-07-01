import React from 'react'
import { RequestAPIData } from '../../api/RequestAPIData';

const FamilyShows = () => {
    const endPoint = "discover/tv?vote_average.lte=10&language=id&with_genres=10751&with_origin_country=ID&with_original_language=id";
  
  return (
    <RequestAPIData title='Family Shows' endPoint={endPoint}/>
  )
}
export default FamilyShows;