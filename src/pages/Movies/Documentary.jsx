import React from 'react';
import { RequestAPIData } from '../../api/RequestAPIData';

const Documentary = () => {
  const endPoint = 'discover/movie?with_genres=99&with_origin_country=ID&with_original_language=id';
  
  return <RequestAPIData title="Documentary" endPoint={endPoint} />;
};
export default Documentary;
