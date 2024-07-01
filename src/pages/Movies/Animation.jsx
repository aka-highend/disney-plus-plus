import React from 'react';
import { RequestAPIData } from '../../api/RequestAPIData';

const AnimationMv = () => {
  const endPoint =
    'discover/movie?include_video=true&language=indonesia&with_genres=16';
    
  return <RequestAPIData title="Animation" endPoint={endPoint} />;
};
export default AnimationMv;
