import React from 'react';
import { RequestAPIData } from '../../api/RequestAPIData';

const War = () => {
  const endPoint = 'discover/movie?with_genres=10752&with_origin_country=ID&with_original_language=id';
  
  return <RequestAPIData title="War" endPoint={endPoint} />;
};
export default War;
