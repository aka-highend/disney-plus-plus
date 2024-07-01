import React from 'react';
import { RequestAPIData } from '../../api/RequestAPIData';

const Thriller = () => {
  const endPoint =
    'discover/movie?with_genres=53&with_origin_country=ID&with_original_language=id';
    
  return <RequestAPIData title="Thriller" endPoint={endPoint} />;
};

export default Thriller;
