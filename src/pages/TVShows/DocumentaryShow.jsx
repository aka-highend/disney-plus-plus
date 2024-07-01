import React from 'react'
import { RequestAPIData } from '../../api/RequestAPIData';

const DocumentaryShows = () => {
    const endPoint = "discover/tv?language=id&with_genres=99&with_origin_country=US&with_original_language=en";
  
  return (
    <RequestAPIData title='Document Shows' endPoint={endPoint}/>
  )
}
export default DocumentaryShows;