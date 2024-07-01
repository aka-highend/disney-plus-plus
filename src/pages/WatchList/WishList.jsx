import styles from "./watchlistupper.module.css";
import React, {  } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/UI/Card";

const WishList = () => {  
  const list = useSelector((state) => state.wishlist.list);

  return (
    <div className={styles.wishlistContainer}>
      {list?.map((item,id)=><Card key={id} img={item.img} videoKey={item.videoKey} data={item}/>)}
    </div>
  );
};
export default WishList;
