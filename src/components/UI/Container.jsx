import styles from "./Container.module.css";
// import img from "../../assets/images/slider-badag.jpg";

import React from "react";
import ItemWrapper from "./ItemWrapper";
import { ImageBase } from "../../api/API";

const Container = (props) => {
  return (
    <div className={styles.container}>
      {props.data.map((item, id) =>
        !props.wishlist ? (
          <ItemWrapper
            key={id}
            id={item.id}
            img={`${ImageBase}${item.poster_path || item.backdrop_path}`}
            title={
              item.title ||
              item.original_title ||
              item.name ||
              item.original_name
            }
            lang={item.original_language === "en" ? "English" : "Indonesia"}
            releaseDate={item.release_date || item.first_air_date}
            rating={item.vote_average}
            description={item.overview}
            type={item.title || item.original_title ? "movie" : "tv"}
          />
        ) : (
          <ItemWrapper
            key={id}
            id={item.id}
            img={item.img}
            title={item.title}
            lang={item.lang}
            releaseDate={item.releaseDate}
            rating={item.rating}
            description={item.description}
            type={item.type}
            added={true}
          />
        )
      )}
    </div>
  );
};
export default Container;
