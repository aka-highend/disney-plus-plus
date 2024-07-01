import React, { Fragment } from 'react';
import Action from './Action';
import Drama from './Drama';
import Crime from './Crime';
import Family from './Family';
import Comedy from './Comedy';
import Thriller from './Thriller';
import Horror from './Horror';
import War from './War';
import SiFi from './SI-FI';
import Mystery from './Mystery';
import Documentary from './Documentary';
import Adventure from './Advanture';
import AnimationMv from './Animation';
import HistoryMv from './History';

const Movies = () => {
  return (
    <Fragment>
      <Action />
      <Drama />
      <Crime />
      <Family />
      <Comedy />
      <Thriller />
      <Horror />
      <War />
      <SiFi />
      <Mystery />
      <HistoryMv />
      <Documentary />
      <Adventure />
      <AnimationMv />
    </Fragment>
  );
};
export default Movies;
