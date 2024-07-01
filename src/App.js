import React, { Fragment,useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Nav from './components/SideNav/Nav';
import Search from "./pages/Search";
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import Details from './pages/Details';
import NotFound from './pages/404';
import WatchList from "./pages/WatchList";
import { useDispatch,useSelector } from "react-redux";
import { authSliceAction } from "./Store/auth-slice";
import { wishlistSliceAction } from "./Store/wishlist-slice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const isAlreadyLoggedIn = localStorage.getItem("token");
    if (isAlreadyLoggedIn) {
      const data = {
        uid: localStorage.getItem("uid"),
        token: localStorage.getItem("token"),
      };
      dispatch(authSliceAction.login(data));
    }
  }, [dispatch]);

  const userId = useSelector(state => state.auth.uid);
  const [length,setLength]=useState();

  useEffect(() => {
    const getAllList = async () => {
      const items = [];
      setLength(items.length);
      
      dispatch(wishlistSliceAction.addAllToWishlist(items));
    };
    
    userId && getAllList();
  }, [dispatch,userId,length]);

  return (
    <Fragment>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/search" element={<Search />} exact />
        <Route path="/movies" element={<Movies />} exact />
        <Route path="/tv-shows" element={<TVShows />} exact />
        <Route path="/watchlist" element={<WatchList />} exact />
        <Route path="/:path/:id/details" element={<Details />} exact />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
};

export default App;
