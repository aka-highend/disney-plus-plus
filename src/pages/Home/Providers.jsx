import React from "react";
import styles from "./providers.module.css";
import disney from "../../assets/images/viewers-disney.png";
import marvel from "../../assets/images/viewers-marvel.png";
import starwars from "../../assets/images/viewers-starwars.png";
import natGo from "../../assets/images/viewers-national.png";
import pixar from "../../assets/images/viewers-pixar.png";
import disneyVideo from "../../assets/videos/disney.mp4";
import marvelVideo from "../../assets/videos/marvel.mp4";
import starwarsVideo from "../../assets/videos/pixar.mp4";
import natGoVideo from "../../assets/videos/star-wars.mp4";
import pixarVideo from "../../assets/videos/national-geographic.mp4";

const Providers = () => {
  return (
    <div className={styles.provider}>
      <div className={styles.ProviderImt}>
        <img src={disney} alt=""/>
        <video src={disneyVideo} className={styles.videoClass} autoPlay={true} loop muted={true} />
      </div>
      <div className={styles.ProviderImt}>
        <img src={pixar} alt=""/>
        <video src={pixarVideo} className={styles.videoClass} autoPlay={true} loop muted={true} />
      </div>
      <div className={styles.ProviderImt}>
        <img src={marvel} alt="" />
        <video src={marvelVideo} className={styles.videoClass} autoPlay={true} loop muted={true} />
      </div>
      <div className={styles.ProviderImt}>
        <img src={starwars} alt="" />
        <video src={starwarsVideo} className={styles.videoClass} autoPlay={true} loop muted={true} />
      </div>
      <div className={styles.ProviderImt}>
        <img src={natGo} alt=""/>
        <video src={natGoVideo} className={styles.videoClass} autoPlay={true} loop muted={true} />
      </div>
    </div>
  );
};
export default Providers;
