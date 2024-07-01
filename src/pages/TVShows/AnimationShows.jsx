import React from 'react'
import { RequestAPIData } from '../../api/RequestAPIData';

const AnimationShows = () => {
    const endPoint = "discover/tv?language=id&with_genres=16&with_origin_country=US&with_original_language=en";
  
  return (
    <RequestAPIData title='Animation Shows' endPoint={endPoint}/>
  )
}
export default AnimationShows;