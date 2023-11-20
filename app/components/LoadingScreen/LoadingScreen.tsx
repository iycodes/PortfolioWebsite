"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import Addi from "./addi";
import { AnimatePresence, motion } from "framer-motion";

export const LoadingScreen = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [show, setShow] = useState(true); // to handle mounting/unmounting
  useEffect(() => {
    console.log("mounted");
    // router.events.on('routeChangeStart', handleRouteChange)
    // router.events.on('routeChangeComplete', handleRouteChangeComplete)
    return () => {};
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={"preloader"}
          whileHover={{ scale: 3.2 }}
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1, transition: { duration: 3 } }}
          // exit={{ opacity: 0 }}
        >
          <section className={styles.loadingWrapper} ref={loaderRef}>
            <div className={styles.loadingBox}>
              <div className={styles.loadingBar}></div>
            </div>
          </section>
          {/* loading */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
