import React from 'react';
import { RequestAPIData } from '../../api/RequestAPIData';

const Crime = () => {
  const endPoint = 'discover/movie?with_genres=80&with_origin_country=ID&with_original_language=id';
  return <RequestAPIData title="Crime" endPoint={endPoint} />;
};

export default Crime;
