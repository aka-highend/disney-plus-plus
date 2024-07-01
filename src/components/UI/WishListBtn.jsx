import styles from "./WishListBtn.module.css";

import React from 'react'

const WishListBtn = (props) => {
  return (
    <div onClick={props.onClick} className={styles.actionWishlistContainer}>
        <div className={styles.wishlistImg}>
            {!props.added && <img src={props.wishlistbtn} alt="" />}
            {props.added && <h3 style={{display:"flex", alignItems:"center", justifyContent:"center"}}>✔</h3>}
        </div>
    </div>
  )
}
export default WishListBtn;
