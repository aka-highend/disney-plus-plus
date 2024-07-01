import React from 'react';
import { RequestAPIData } from '../../api/RequestAPIData';

const Mystery = () => {
  const endPoint = 'discover/movie?with_genres=9648&with_origin_country=ID&with_original_language=id';
  
  return <RequestAPIData title="Mystery" endPoint={endPoint} />;
};
export default Mystery;
