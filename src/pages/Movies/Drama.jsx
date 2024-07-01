import React from 'react';
import { RequestAPIData } from '../../api/RequestAPIData';

const Drama = () => {
  const endPoint =
    'discover/movie?with_genres=18&with_origin_country=ID&with_original_language=id';

  return <RequestAPIData title="Drama" endPoint={endPoint} />;
};

export default Drama;
