import styles from "./PlayBtn.module.css";

import React from "react";

const PlayBtn = (props) => {
  return (
   <div onClick={props.onClick} className={`${styles.actionBtnContainer} ${props.className}`}>
    <div className={styles.btnImg}><img src={props.playbtn} alt=""/></div>
    <button className={styles.actionBtn}>
      {props.play ? "Watch Now" : "Pause Now"}
    </button>
   </div>
  );
};
export default PlayBtn;
