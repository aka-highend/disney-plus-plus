import React from 'react'
import { RequestAPIData } from '../../api/RequestAPIData';

const WarPolShows = () => {
    const endPoint = "discover/tv?with_genres=10768&with_original_language=en|hi";
  
  return (
    <RequestAPIData title='War & Politics' endPoint={endPoint}/>
  )
}
export default WarPolShows;