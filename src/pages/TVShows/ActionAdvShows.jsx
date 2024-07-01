import React from 'react'
import { RequestAPIData } from '../../api/RequestAPIData';

const ActionAdvShows = () => {
  const endPoint = "discover/tv?language=id&with_genres=10759&with_origin_country=US&with_original_language=en";
  
  return (
    <RequestAPIData title='Action & Adventure Shows' endPoint={endPoint}/>
  )
}
export default ActionAdvShows;