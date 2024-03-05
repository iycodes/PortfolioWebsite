import React from "react";
import styles from "./preloader.module.scss";
function Preloader() {
  return (
    <div className={styles.section}>
      <div>
        <div className={styles.box}>
          <div className={styles.ball}> </div>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
