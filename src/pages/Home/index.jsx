import React, { Fragment,Suspense } from 'react';
import Providers from './Providers';
import PopularMovies from './PopularmMovies';
import PopularShows from './PopularShows';
import TopRatedMovies from './TopRatedMovies';
import TopRatedShows from './TopRatedShows';

const Poster=React.lazy(()=>import('./Poster'));

const img="https://ciremaitoday.com/wp-content/uploads/2024/03/disney_logo_nov_2021_rbg_0fa74b54.jpeg";

const Home = () => {
  return (
    <Fragment>
      <Suspense fallback={<img src={img} alt=''/>}><Poster/></Suspense>
      <Providers/>
      <TopRatedMovies/>
      <TopRatedShows/>
      <PopularMovies/>
      <PopularShows/>
    </Fragment>
  )
}
export default Home;
