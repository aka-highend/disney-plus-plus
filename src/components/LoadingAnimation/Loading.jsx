import React from 'react';
import styles from './loading.module.css';

const LoadingAnimation = () => {
  return (
    <div className={styles.dualRingPosition}>
      <div className={styles.ldsDualRing}></div>
    </div>
  );
};

export default LoadingAnimation;