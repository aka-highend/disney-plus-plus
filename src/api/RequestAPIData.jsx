import React, { useState, useEffect } from "react";
import styles from "./RequestAPI.module.css";
import { ImageBase, fetchData } from "./API";
import SlidingContainer from '../components/UI/SlidingContainer';
import ItemWrapper from '../components/UI/ItemWrapper';
import NoData from '../components/LoadingAnimation/Loading';

export const RequestAPIData = (props) => {
  const endPoint = props.endPoint;
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData(endPoint);
      console.log('RES: ', res);
      setData(res?.results);
    };
    getData();
    // console.log("i'm from "+props.title);
    // console.log(data);
  
  }, [endPoint]);

  if(data?.length === 0){
    return <NoData />;
  };

  return (
    <div className={styles.onContainer} id={props.id}>
      <h4>{props.title}</h4>
      <SlidingContainer>
        {data?.map((item, id) => (
          <ItemWrapper
            key={id}
            id={item.id}
            img={`${ImageBase}${item.poster_path || item.backdrop_path}`}
            title={item.title || item.original_title || item.name || item.original_name}
            lang={item.original_language === 'en' ? "English" : "Indonesia"}
            releaseDate={item.release_date || item.first_air_date}
            rating={item.vote_average}
            description={item.overview}
            type={(item.title || item.original_title) ? "movie":"tv"}
          />
        ))}
      </SlidingContainer>
    </div>
  );
};


