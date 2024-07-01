import React from 'react';
import { RequestAPIData } from '../../api/RequestAPIData';

const Action = () => {
  const endPoint =
    'discover/movie?with_genres=28&with_origin_country=ID&with_original_language=id';
    
  return <RequestAPIData title="Action" endPoint={endPoint} />;
};
export default Action;
