import React, { Fragment } from 'react';
import TrendingShows from './TrendingShows';
import DramaShows from './DramaShows';
import ComedyShows from './ComedyShows';
import CrimeShows from './CrimeShows';
import FamilyShows from './FamilyShows';
import ActionAdvShows from './ActionAdvShows';
import AnimationShows from './AnimationShows';
import KidsShow from './KidsShow';
import DocumentaryShows from './DocumentaryShow';
import FantasyShows from './FantasyShows';
import NewsShows from './NewsShows';
import RealityShows from './RealityShows';
import TalkShows from './TalkShows';
import WarPolShows from './WarPoliticsShows';
import WesternShows from './WesternShows';

const TVShows = () => {
  return (
    <Fragment>
      <TrendingShows />
      <DramaShows />
      <ComedyShows />
      <CrimeShows />
      <FamilyShows />
      <ActionAdvShows />
      <AnimationShows />
      <KidsShow />
      <DocumentaryShows />
      <FantasyShows />
      <NewsShows />
      <RealityShows />
      <TalkShows />
      <WarPolShows />
      <WesternShows />
    </Fragment>
  );
};
export default TVShows;
