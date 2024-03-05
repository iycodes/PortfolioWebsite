import React from "react";
import styles from "./pictureFrame.module.scss";
import Image from "next/image";
// import photo from "@/public/images/testImage.webp";
import photo from "@/public/images/IMG_5258.webp";
function PictureFrame() {
  return (
    <div className={styles.container}>
      <Image src={photo} className={styles.innerFrame} alt="my picture" />

      <div className={styles.about}>FULLSTACK DEVELOPER</div>
      <div className={styles.about}>
        <span>Fanoro Iyanuoluwa Victor</span>
      </div>
    </div>
  );
}

export default PictureFrame;
