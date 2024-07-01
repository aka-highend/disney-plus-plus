import React from 'react'
import { RequestAPIData } from '../../api/RequestAPIData';

const KinsShow = () => {
  const endPoint = "discover/tv?language=id&with_genres=10762&with_origin_country=US&with_original_language=en";
  
  return (
    <RequestAPIData title='Kids Shows' endPoint={endPoint}/>
  )
}
export default KinsShow;