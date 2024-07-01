import React from 'react';
import { RequestAPIData } from '../../api/RequestAPIData';

const Horror = () => {
  const endPoint = 'discover/movie?with_genres=27&with_origin_country=ID&with_original_language=id';
  return <RequestAPIData title="Horror" endPoint={endPoint} />;
};

export default Horror;
