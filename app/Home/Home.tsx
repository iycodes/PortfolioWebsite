"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./home.module.scss";
import useIsomorphicLayoutEffect from "../helpers/isomorphicEffect";
// import { ScrollTrigger, customEaseIn, gsap } from "../lib/gsap";

import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { sleep } from "../helpers/helperFunctions";
import Section1, {
  section1Timeline,
  fourtyFrames,
  scaleAnimation,
} from "../sections/section1/section1";
import { signal } from "@preact/signals-core";
import { motion } from "framer-motion";
import { Tween } from "framer-motion";
import Section2 from "../sections/section2/section2";
import Section5 from "../sections/section5/section5";
import TechStack from "../sections/techstack/TechStack";
import Contact from "../sections/contact/contact";
import StackedCards from "../sections/stackedCards/stackedCards";
import { ScrollSmoother } from "gsap-trial/all";
import { customEaseIn, useGSAP, gsap } from "../lib/gsap";
import Footer from "../sections/Footer/Footer";
import Section5_mobile from "../sections/Section5_mobile/Section5_mobile";
import Menu, { menuRefSignal } from "../components/menu/Menu";
// import { iceFont, rockitFont } from "../layout";
import { headerRefSignal } from "../components/Header/Header";
import { iceFont, rockitFont } from "../page";

function Home() {
  const cursorLabel = useRef(null);
  const whiteBall = useRef(null);
  const blackBall = useRef(null);
  const animationsRef = useRef(null);
  const lineRef = useRef(null);
  const componentRef = useRef(null);
  const otherSections = useRef(null);
  const section1 = useRef(null);
  function showBlackBall() {
    gsap.set(blackBall.current, {
      //   backgroundColor: "black",
      opacity: 1,
    });
  }

  if (typeof window != "undefined") {
    window.onbeforeunload = function () {
      console.log("scroll to top!");
      window.scrollTo(0, 0);
    };
  }

  const timeline = gsap.timeline({
    // paused: true,
    defaults: {
      ease: "power4.out",
    },
  });
  useGSAP(() => {
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });

    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
    const mouseMoved = (e: MouseEvent) => {
      const { pageX, pageY } = e;

      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    };
    window.addEventListener("mousemove", (e) => {
      mouseMoved(e);
    });
    if (!whiteBall.current) return;
    const mm = gsap.matchMedia();
    mm.add(
      {
        isDesktop: "(min-width: 800px)",
        isMobile: "(max-width: 799px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        let { isDesktop, isMobile, reduceMotion }: any = context.conditions;
        timeline
          .to(whiteBall.current, {
            duration: 3.5,
            // onComplete: showBlackBall,
            // onStart: showBlackBall,
            // ease: customEaseIn,
            ease: "power2.inOut",
            keyframes: {
              //   "25%": {
              //     scale: 10,
              //   },
              "100%": {
                scale: isDesktop ? 70 : 50,
              },
            },
          })
          .to(
            iycodesRefSignal.value!.current as any,
            {
              duration: isDesktop ? 2 : 2.5,
              transform: "translateY(-70vh)",
              ease: customEaseIn,
            },
            "<+0.5"
          )
          .to(
            blackBall.current,

            {
              duration: 3.5,
              //   onComplete: completed,
              onStart: () => {
                showBlackBall();
                gsap.set(lineRef.current, {
                  display: "none",
                });
              },
              //   ease: customEaseIn,
              ease: "power2.inOut",

              keyframes: {
                "100%": {
                  scale: isDesktop ? 70 : 50,
                },
              },
              delay: "-1.5",
            }
          )
          .to(
            iycodes2RefSignal.value!.current,
            {
              // paused: true,
              // y: -deviceHeight,
              //   zIndex: "0",
              duration: isDesktop ? 2 : 2.5,
              transform: "translateY(-70vh)",
              ease: customEaseIn,
            },
            "<+0.5"
          )
          .to(animationsRef.current, {
            display: "none",
            onStart: () => {
              console.log("preloader done");
              section1Timeline.value!.play().then(() =>
                gsap.set(componentRef.current, {
                  // overflow: "visible",
                })
              );
            },
            onComplete: () => {
              gsap.set(componentRef.current, {
                // height: "auto",
                // position: "relative",
              });
            },
            delay: "-1",
          })
          .to(menuRefSignal.value!.current, {
            autoAlpha: 1,
            x: 0,
            // duration: "1",
            ease: "ease.inout",
            // delay: "1",
          });
        // .to(headerRefSignal.value!.current, {
        //   autoAlpha: 1,
        //   top: "0.5rem",
        //   duration: "1.5",
        //   ease: "ease.inout",
        //   height: "auto",
        //   delay: "1",
        // });
        // .set(
        //   ".body",
        //   {
        //     height: "auto",
        //     overflow: "scroll",
        //   },
        //   "<"
        // );

        // timeline.play();
      }
    );

    return () => {
      window.removeEventListener("mousemove", (e) => {
        mouseMoved(e);
      });
    };
  }, []);

  return (
    <>
      {/* <Iycodes />
      <Iycodes2 /> */}
      <div
        className="homescope"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div ref={componentRef} className={styles.sections}>
          <div className={styles.animations} ref={animationsRef}>
            <div className={styles.animation1}>
              <div className={styles.title}>iycodes©</div>
              <div ref={whiteBall} className={styles.ball}></div>
              <div ref={blackBall} className={styles.blackBall}></div>
              <div className={styles.line} ref={lineRef}></div>
              <Iycodes />
              <Iycodes2 />
            </div>
          </div>
          <Menu />
          <Section1 />
          <Section2 />
          <TechStack />
          <Section5_mobile />
          <Section5 />
          <StackedCards />
          <Contact />
          <Footer />
        </div>
        <motion.div
          ref={cursorLabel}
          animate={"enter"}
          variants={scaleAnimation}
          className={styles.cursorLabel}
        >
          <div className={styles.custom_pointer}></div>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
const iycodesRefSignal = signal<React.MutableRefObject<null> | null>(null);
const iycodesTl = signal<gsap.core.Tween | null | gsap.core.Timeline>(null);
export const Iycodes = () => {
  const iycodes = useRef(null);
  iycodesRefSignal.value = iycodes;
  useGSAP(() => {
    gsap.set(iycodes.current, {
      // y: 120,
      display: "block",
      transform: "translateY(80vh)",
      // scaleY: 5,
    });
    const tl = gsap.timeline({
      paused: true,
      // defaults:{
      //     pas
      // }
    });
    tl.to(iycodes.current, {
      // paused: true,
      // y: -deviceHeight,
      duration: 2.5,
      transform: "translateY(-70vh)",

      ease: customEaseIn,
    }).to(iycodes.current, {
      display: "none",
    });
    iycodesTl.value = tl;
  });
  return (
    <span className={styles.iycodes} ref={iycodes}>
      <span className={`${iceFont.className} ${styles.a}`}>VICTOR</span>
      <span className={`${iceFont.className} ${styles.b}`}>IYANUOLUWA</span>
    </span>
  );
};
const iycodes2RefSignal = signal<React.MutableRefObject<null> | null>(null);

const iycodesTl2 = signal<gsap.core.Tween | null | gsap.core.Timeline>(null);
export const Iycodes2 = () => {
  const iycodes2 = useRef(null);
  iycodes2RefSignal.value = iycodes2;
  useGSAP(() => {
    gsap.set(iycodes2.current, {
      // y: 120,
      display: "block",
      transform: "translateY(80vh)",
    });
  });

  return (
    <div className={`${styles.iycodes2} ${iceFont.className}`} ref={iycodes2}>
      FANORO
    </div>
  );
};
