import styles from "./RequestAPI.module.css";
import SlidingContainer from "../components/UI/SlidingContainer";

import VideoWrapper from "../components/UI/VideoWrapper";
import { RequestVideoIds } from "./RequestVideoIds";

export const RequestVideoData = (props) => {

  const img = props.img.replace("w500", "w1280");


  const { videoId: id, type } = props;
  
  const data = RequestVideoIds({ id, type, multiple: true });
   

  // console.log(data);

  return (
    <div className={styles.onContainer} id={props.id}>
      <h4>{props.title}</h4>
      {data?.length>0 ? <SlidingContainer>
        {data.map((item, id) => (
          <VideoWrapper
            key={id}
            id={item.key}
            img={img}
            title={
              item.name ||
              item.title ||
              item.original_name ||
              item.original_title
            }
          />
        ))}
      </SlidingContainer>
      :<p style={{textAlign:"center",color:"white",fontSize:"1rem"}}>No trailers found, try another movie/series......</p>}
    </div>
  );
};
