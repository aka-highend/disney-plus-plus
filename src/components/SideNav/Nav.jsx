import React from "react";
import styles from "./Nav.module.css";
import logo from "../../assets/images/disneyplus-hotstar-logo-freelogovectors.net_.webp";
import home from "../../assets/images/home-icon.svg";
import search from "../../assets/images/search-icon.svg";
import movies from "../../assets/images/movie-icon.svg"
import tv from "../../assets/images/tv-icon.svg";
import person from "../../assets/images/person_white.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav_logo}>
        <Link to="/">
          <img src={logo} alt="Disney+ Hotsrat logo" />
        </Link>
      </div>
      <div className={styles.nav_items}>
        <div className={styles.nav_comp}>
          <Link to="/watchlist"><span>
            <img src={person} alt="Watch List" />
          </span></Link>
          <span>
            <h4>Watch List</h4>
          </span>
        </div>
        <div className={styles.nav_comp}>
          <Link to="/search">
            <span>
              <img src={search} alt="Search" />
            </span>
          </Link>
          <span>
            <h4>Search</h4>
          </span>
        </div>
        <div className={styles.nav_comp}>
          <Link to="/">
            <span>
              <img src={home} alt="Home" />
            </span>
          </Link>
          <span>
            <h4>Home</h4>
          </span>
        </div>
        <div className={styles.nav_comp}>
          <Link to="/movies"><span>
            <img src={movies} alt="Movies" />
          </span></Link>
          <span>
            <h4>Movies</h4>
          </span>
        </div>
        <diV className={styles.nav_comp}>
          <Link to="/tv-shows"><span>
            <img src={tv} alt="TV" />
          </span></Link>
          <span>
            <h4> TV</h4>
          </span>
        </diV>
      </div>
    </div>
  );
};

export default Nav;
