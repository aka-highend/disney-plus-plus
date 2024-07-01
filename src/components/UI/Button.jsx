import styles from "./Button.module.css";

import React from 'react'

const Button = (props) => {
  return (
    <div className={`${styles.general_button} ${props.className}`}>
        <button onClick={props.onClick}>{props.label}</button>
    </div>
  )
}
export default Button;