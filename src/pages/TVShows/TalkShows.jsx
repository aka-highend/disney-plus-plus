import React from 'react';
import { RequestAPIData } from '../../api/RequestAPIData';

const TalkShows = () => {
  const endPoint = 'discover/tv?language=id&with_genres=10767&with_origin_country=US&with_original_language=en';

  return <RequestAPIData title="Talk Shows" endPoint={endPoint} />;
};

export default TalkShows;