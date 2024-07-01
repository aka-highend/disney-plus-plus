import styles from "./ModalContainer.module.css";

import React from 'react'

const ModalContainer = (props) => {
  
  return (
    <div className={styles.modalContainer} onClick={props.onClick}>
      <div className={styles.backdrop} />
      {/* <div className={styles.modalItem}>{props.children}</div> */}
    </div>
  )
}
export default ModalContainer;