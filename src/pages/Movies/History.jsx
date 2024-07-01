import React from 'react';
import { RequestAPIData } from '../../api/RequestAPIData';

const HistoryMv = () => {
  const endPoint = 'discover/movie?with_genres=36&with_origin_country=ID&with_original_language=id';
  return <RequestAPIData title="History" endPoint={endPoint} />;
};

export default HistoryMv;
