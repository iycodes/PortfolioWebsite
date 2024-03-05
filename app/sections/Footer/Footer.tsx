import React from "react";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <h1>IYCODES © 2023</h1>
      <div>
        <div className={styles.copyright}>© ALL OF THE RIGHTS RESERVED</div>
      </div>
    </div>
  );
}

export default Footer;
