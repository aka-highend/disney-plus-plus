import React from 'react'
import { RequestAPIData } from '../../api/RequestAPIData';

const DramaShows = () => {
    const endPoint = "discover/tv?vote_average.lte=9.5&language=id&with_genres=18&with_origin_country=US&with_original_language=en&page=1";
  
  return (
    <RequestAPIData title='Drama Shows' endPoint={endPoint}/>
  )
}
export default DramaShows;