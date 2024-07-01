import React from 'react';
import { RequestAPIData } from '../../api/RequestAPIData';

const SiFi = () => {
  const endPoint = 'discover/movie?include_video=true&language=indonesia&with_genres=878';

  return <RequestAPIData title="SiFi" endPoint={endPoint} />;
};

export default SiFi;
