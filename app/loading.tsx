"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";
import styles from "./components/LoadingScreen/styles.module.scss";

export default function Loading() {
  // const loadingScreen = useRef(null);
  // const loadingBar = useRef(null);
  // const router = useRouter();
  // const [route, setRoute] = useState(router.pathname);
  // useEffect(() => {
  //   const timeLine = gsap.timeline();
  //   timeLine.to(loadingBar.current, {
  //     width: "100%",
  //     duration: 3,
  //     ease: "expo. inOut",
  //   });
  //   timeLine.to(loadingBar.current, { opacity: "0", duration: 0.2 });
  //   timeLine.to(loadingScreen.current, {
  //     opacity: 0,
  //     display: "none",
  //     duration: 0.5,
  //   });
  // });
  console.log("loadingg");
  useEffect(() => {
    console.log("loadingg");

    return () => {
      console.log("loding done");
    };
  });

  return (
    <>
      {/* <div ref={loadingScreen} className={styles.loading_section}>
      <div className={styles.loading_wrapper}>
        <div className={styles.bar} ref={loadingBar}>
          loading...
        </div>
      </div>
    </div> */}
      <section className={styles.loadingWrapper}>
        <div className={styles.loadingBox}>
          <div className={styles.loadingBar}></div>
        </div>
        {/* loading */}
      </section>
    </>
  );
}
