import React from 'react';
import { RequestAPIData } from '../../api/RequestAPIData';

const Family = () => {
  const endPoint = 'discover/movie?with_genres=10751&with_origin_country=ID&with_original_language=id';

  return <RequestAPIData title="Family" endPoint={endPoint} />;
};

export default Family;
