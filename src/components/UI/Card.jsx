import styles from "./Card.module.css";
import playIcon from "../../assets/images/play-buttonDes.png";
import removeIcon from "../../assets/images/remove_icon.png";
import React, { useState } from "react";
// import ItemWrapper from "./ItemWrapper";
import VideoPlayer from "../../api/VideoPlayer";
import { wishlistSliceAction } from "../../Store/wishlist-slice";
import { useDispatch, useSelector } from "react-redux";
// import { removeDataFromDataBase } from "../../Store/firebase/firebase";

const Card = (props) => {
  const [playVideo, setPlayVideo] = useState(false);
  const [hover,setHover]=useState(false);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.uid);
  const videoPlayHandler = () => {
    if (!props.videoKey) {
      return alert("Sorry!!! This video is not available.");
    }
    setPlayVideo(true);
  };
  const closeVideoPlayerHandler=()=>{
    setPlayVideo(false);
  }
  const removeFremWishlistHandler = () => {
    dispatch(wishlistSliceAction.removeFromWishlist(props.data.id));
  };
  const openHoverHandler=()=>{
    setHover(true);
  }
  const closeHoverHandler=()=>{
    setHover(false);
  }

  return !playVideo ? (
    <div onMouseOverCapture={openHoverHandler} className={styles.CardParent}>
      <div className={styles.cardPoster}>
        <img src={props.img} alt="" />
      </div>
      {hover && <div onMouseOutCapture={closeHoverHandler} className={styles.cardActions}>
        <span>
          <img onClick={videoPlayHandler} src={playIcon} alt="" />
        </span>
        <span>
          <img onClick={removeFremWishlistHandler} src={removeIcon} alt="" />
        </span>
      </div>}
    </div>
  ) : (
    <VideoPlayer
    className={styles.modifyVideoplayer}
      id={props.videoKey}
      width={"100%"}
      height={"80%"}
      autoPlay={true}
      muted={false}
      control={true}
      openCloseIcon={true}
      closeVideoPlayerHandler={closeVideoPlayerHandler}
    />
  );
};
export default Card;
