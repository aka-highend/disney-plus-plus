
import styles from "./SlidingContainer.module.css";

import React from 'react'

const SlidingContainer = (props) => {
  return (
    <div className={styles.slidingContainer}>{props.children}</div>
  )
}
export default SlidingContainer;