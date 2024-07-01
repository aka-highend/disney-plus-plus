import React from 'react';
import { RequestAPIData } from '../../api/RequestAPIData';

const Comedy = () => {
  const endPoint = 'discover/movie?with_genres=35&with_origin_country=ID&with_original_language=id';
  
  return <RequestAPIData title="Comedy" endPoint={endPoint} />;
};

export default Comedy;
