import styles from "./HoverContainer.module.css";
import React from "react";
import VideoPlayer from "../../api/VideoPlayer";

const HoverContainer = (props) => {

  return (
    <div
      onMouseOutCapture={props.onMouseOutCapture}
      className={styles.hoverContainer}
    >
      <VideoPlayer
        id={props.id}
        img={props.img}
        autoPlay={true}
        muted={true}
        control={false}
        width={"10rem"}
        height={"7rem"}
      />
        <div className={styles.overlay}/>
      <div className={styles.hoverBtnsContainer}>
        <h1>{props.title}</h1>
        <h2>
          {props.releaseDate} | Language: {props.lang} | Rating: {props.rating}
        </h2>
      </div>
    </div>
  );
};
export default HoverContainer;
