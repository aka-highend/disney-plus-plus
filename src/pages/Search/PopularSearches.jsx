
import React from 'react';
import Container from "../../components/UI/Container"
import styles from "./search.module.css";
import LoadingAnimation from "../../components/LoadingAnimation/Loading";

const PopularSearches = (props) => {
  return (
    <div className={styles.popularSearch}>
        <h3>Popular Searches</h3>
        {props.data?.length > 0 ? (
          <Container data={props.data} />
        ) : props.data?.length === 0 && (props.query === undefined || props.query === '') ? (
          <LoadingAnimation />
        ) : (
          <div className={styles.notFoundResult}>
            <h2>
              No results found for {props.query}.
            </h2>
            <h2 className={styles.pleaseTryAnotherTitle}>
              Please try another title.
            </h2>
          </div>
        )}
    </div>
  )
}
export default PopularSearches;