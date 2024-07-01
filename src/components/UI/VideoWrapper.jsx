// import { fallbackImg } from "../../API/API";
import VideoPlayer from "../../api/VideoPlayer";
import styles from "./VideoWrapper.module.css";

import React, {  } from "react";

const VideoWrapper = (props) => {
  // const [playTrailer, setPlayTrailer] = useState(true);
  // const playTrailerHandler = () => {
  //   setPlayTrailer(true);
  // };
  // console.log(props.id);
  // const img = props.img.includes("jpg") ? props.img : fallbackImg;
  return (
    <div  className={styles.VideoWrapper}>
     {/* <img src={img} alt="" /> */}
     <VideoPlayer className={styles.trailerPlayer} id={props.id} width={"20rem"} height={"13rem"}/>
    </div>
  );
};
export default VideoWrapper;
