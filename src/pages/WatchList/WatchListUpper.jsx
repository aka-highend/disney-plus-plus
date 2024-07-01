import React from 'react';
import styles from "./watchlistupper.module.css";
import img from "../../assets/images/my_space_login_in.webp";

const WatchListUpper = () => {
  return (
    <div className={styles.noAuthContainer}>
        <div className={styles.noAuthInfo}>
            <div className={styles.noAuthLogo}>
                <img  src={img} alt=""/>
            </div>
            <div className={styles.noAuthText}>
                <h2 className={styles.watchList}>Watch List</h2>
                <p>Start watching from where you left off</p>
            </div>
        </div>
    </div>
  )
}

export default WatchListUpper;