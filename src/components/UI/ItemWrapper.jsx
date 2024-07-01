import { fallbackImg } from "../../api/API";
import styles from "./ItemWrapper.module.css";
import { useNavigate, useResolvedPath } from "react-router-dom";
import React, { useState } from "react";
import { detailSliceAction } from "../../Store/details-slice";
import { useDispatch,useSelector } from "react-redux";
import { RequestVideoIds } from "../../api/RequestVideoIds";
// import VideoPlayer from "../../API/VideoPlayer";
// import { sendDataToDatabase } from "../../Store/firebase/firebase";
import HoverContainer from "./HoverContainer";

const ItemWrapper = (props) => {
  const [hover, setHover] = useState(false);
  // const [hoverActive,setHoverActive]=useState(false);
  // const [videoId,setVideoId]=useState()
  const dispatch = useDispatch();
  const userId=useSelector(state=>state.auth.uid);
  const videoId = RequestVideoIds({
    id: props.id,
    type: props.type,
    multiple: false,
  });
  // setVideoId(videoKey);
  const data = {
    videoId:videoId ?? null,
    id: props.id,
    img: props.img ?? null,
    type: props.type,
    lang: props.lang ?? null,
    added:props.added ?? false,
    title: props.title,
    rating: props.rating ?? null,
    description: props.description ?? null,
    releaseDate: props.releaseDate ?? null,
  };
  const navigate = useNavigate();
  let path = useResolvedPath("").pathname;
  if (path === "/") {
    path = path + "home";
  }
  if (path.indexOf("/details") > 0) {
    const ch = path.charAt(1);
    if (ch === "h") path = "/home";
    else if (ch === "m") path = "/movies";
    else if (ch === "s") path = "/search";
    else path = "/tv-shows";
  }
  const onClickhandler = () => {
    dispatch(detailSliceAction.addData(data));
    //send current clicked item details to database:
    // sendDataToDatabase({collection:"itemDetails", id:userId, value:data});

    navigate(`${path}/${props.id}/details`);
  };
  const img = props.img?.includes("jpg") ? props.img : fallbackImg;
  const mouseOverHandler = () => {
    if (!videoId) {
      // alert("Sorry! this video is unavailable");
      return;
    }
    setHover(true);
  };
  const mouseOutHandler = () => {
    setHover(false);
  };

  return (
    <div onClick={onClickhandler} className={styles.itemWrapper}>
      {!hover && <img onMouseOverCapture={mouseOverHandler} src={img} alt="" />}
      {hover && (
        
          <HoverContainer
          onMouseOutCapture={mouseOutHandler}
            id={videoId}
            img={data.img}
            rating={data.rating}
            lang={data.lang}
            releaseDate={data.releaseDate}
            description={data.description}
            title={data.title}
          />
      )}
    </div>
  );
};
export default ItemWrapper;
