import React from 'react';
import { RequestAPIData } from '../../api/RequestAPIData';

const Adventure = () => {
  const endPoint =
    'discover/movie?with_genres=12&with_origin_country=ID&with_original_language=id';

  return <RequestAPIData title="Adventure" endPoint={endPoint} />;
};

export default Adventure;
