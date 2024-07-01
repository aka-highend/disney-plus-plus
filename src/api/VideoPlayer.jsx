import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import closeIcon from "../assets/images/close_icon_red.png";

const VideoPlayer = (props) => {
  return (
    <Fragment>
      {props.openCloseIcon && (
        <div>
          <img
            onClick={props.closeVideoPlayerHandler}
            style={{
              width: "3rem",
              height: "3rem",
              zIndex: "100",
              // background: "red",
              cursor: "pointer",
              position: "absolute",
              top: "5%",
              left:"50%"
            }}
            src={closeIcon}
            alt=""
          />
        </div>
      )}
      <ReactPlayer
        className={props.className}
        url={`https://www.youtube.com/watch?v=${props.id}`}
        origin= 'http://localhost:3000' 
        width={props.width}
        height={props.height}
        controls={props.control}
        playing={props.autoPlay}
        loop={props.autoPlay}
        muted={props.muted}
        onMouseOutCapture={props.onMouseOutCapture}
      />
    </Fragment>
  );
};
export default VideoPlayer;
