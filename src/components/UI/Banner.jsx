import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Banner.module.css";
import play from "../../assets/images/play-icon-white.png";
import wishList from "../../assets/images/watchlist-icon.svg";
import PlayBtn from "./PlayBtn";
import WishListBtn from "./WishListBtn";
import VideoPlayer from "../../api/VideoPlayer";
import { wishlistSliceAction } from "../../Store/wishlist-slice";
// import { addDataToDataBase } from "../../Store/firebase/firebase";

const Banner = (props) => {
  const [trailer, setTrailer] = useState(false);
  const dispatch = useDispatch();
  const img = props.data?.img.replace("w500", "original");
  const userId = useSelector((state) => state.auth.uid);
  
  const playHandler = () => {
    setTrailer((state) => !state);
  };
  const addToListHandler = async() => {
    if(!userId){
      alert("Please login to access wishlist!!!");
      return;
    }
    if(props?.data?.added){
      return alert("Already exist in your Wishlist!!!");
    }
    props.data.added = true;
    dispatch(wishlistSliceAction.addToWishlist(props.data));
    // addDataToDataBase({collection:userId, value:props.data});
  };
  return (
    <div className={styles.banner}>
      {/* <div className={styles.banner_effect_left} /> */}
      {!trailer && props.video && (
        <video src={props.video} autoPlay={true} loop muted={true} />
      )}
      {!trailer && !props.video && <img src={img} alt="" />}
      {trailer && (
        <VideoPlayer
          title={props.data.title}
          id={props.data.videoKey}
          autoPlay={true}
          width={"100vw"}
          height={"80vh"}
        />
      )}
      <div className={styles.banner_effect} />
      {!props.video && <div className={styles.content}>
        <div>
          <h1>{props.data ? props.data.title : "The Legend of Aang"}</h1>
        </div>
        <div>
          <h4>
            {props.data ? props.data.releaseDate : "2023"} |{" "}
            {props.data ? props.data.rating.toFixed(1) : "7.5"} | {" "}
            {props.data ? props.data.lang : "3 Languages"}
          </h4>
        </div>
        <div>
          <p>
            {props.data
              ? props.data.description
              : `It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.`}
          </p>
        </div>
        <div className={styles.btnContainer}>
          <PlayBtn onClick={playHandler} play={!trailer} playbtn={play} />
          <WishListBtn
            wishlistbtn={wishList}
            added={props?.data?.added}
            onClick={addToListHandler}
          />
        </div>
      </div>}
    </div>
  );
};
export default Banner;
