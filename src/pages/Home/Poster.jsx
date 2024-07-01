import Banner from '../../components/UI/Banner';
import styles from "./Poster.module.css";
import video from "../../assets/videos/star-wars.mp4";

const Poster = () => {
  return (
    <div className={styles.poster}>
      <Banner video={video}/>
    </div>
  )
}
export default Poster;
