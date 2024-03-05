"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./section1.module.scss";
import useIsomorphicLayoutEffect from "@/app/helpers/isomorphicEffect";

import { FaGithub } from "react-icons/fa6";
import { gsap } from "@/app/lib/gsap";
import { signal } from "@preact/signals-core";
// import { effect, signal } from "@preact/signals-react";
import { EASE2, customEaseIn } from "@/app/lib/gsap";
import { motion } from "framer-motion";
import PictureFrame from "@/app/components/pictureFrame/PictureFrame";
import Section1A from "../section1A/section1A";
import { useGSAP } from "@gsap/react";
import { rockitFont } from "@/app/page";
// import { rockitFont } from "@/app/layout";
let timeline_: gsap.core.Timeline | undefined;

export const section1Timeline = signal(timeline_);
const modalActive = signal(false);

function Section1() {
  // const customEaseIn = CustomEase.create(
  //   "custom-ease-in",
  //   "0.52, 0.00, 0.48, 1.00"
  // );

  const [modalStatus, setModalStatus] = useState<string>("entered");

  const modalContainer = useRef(null);
  const cursorLabel = useRef(null);
  const componentRef = useRef(null);
  const book = useRef(null);
  const fo = useRef(null);
  const btnText = useRef(null);
  const ory = useRef(null);
  const ry = useRef(null);
  const a = useRef(null);
  const tells = useRef(null);
  const ssil = useRef(null);
  const copy = useRef(null);
  const st = useRef(null);
  const scrollToRows = useRef(null);
  const open = useRef(null);

  // const [modalActive, setModalActive] = useState(false);

  const useGSAP_options = {
    scope: componentRef,
  } as any;

  useGSAP((c, contextSafe) => {
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });

    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });

    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
    //@ts-ignore
    const mouseMoved = contextSafe((e: any) => {
      const { pageX, pageY } = e;

      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
    window.addEventListener("mousemove", (e) => {
      mouseMoved(e);
    });
    const timeline = gsap.timeline({
      paused: true,
      defaults: {
        ease: "power4.out",
      },
    });
    timeline
      .to(componentRef.current, {
        ease: "expo.in",
        autoAlpha: 1,
        duration: 1,
      })
      .fromTo(
        book.current,
        { y: "0.5rem" },
        { y: "0rem", duration: fourtyFrames, ease: customEaseIn },
        twoFrames
      )
      .fromTo(
        fo.current,
        { x: "2.1rem" },
        { x: "0rem", duration: fiftyFrames, ease: customEaseIn },
        twoFrames
      )
      .fromTo(
        a.current,
        { x: "-1.2rem" },
        { x: "0rem", duration: fiftyFrames, ease: customEaseIn },
        twoFrames
      )
      .fromTo(
        ory.current,
        { x: "-3.2rem" },
        { x: "0rem", duration: fiftyFrames, ease: customEaseIn },
        twoFrames
      )
      .fromTo(
        open.current,
        { y: "0.3rem" },
        { y: "0rem", duration: fourtyFrames, ease: customEaseIn },
        fourFrames
      )
      .fromTo(
        ry.current,
        { x: "-4rem" },
        { x: "0rem", duration: fiftyFrames, ease: customEaseIn },
        fourFrames
      )
      .fromTo(
        ssil.current,
        { x: "-3.1rem" },
        { x: "0rem", duration: fiftyFrames, ease: customEaseIn },
        fourFrames
      )
      .fromTo(
        tells.current,
        { x: "4.3rem" },
        { x: "0rem", duration: fiftyFrames, ease: customEaseIn },
        fourFrames
      )
      .fromTo(
        st.current,
        { x: "1.9rem" },
        { x: "0rem", duration: fiftyFrames, ease: customEaseIn },
        fourFrames
      );
    section1Timeline.value = timeline;

    return () => {
      window.removeEventListener("mousemove", (e) => {
        mouseMoved(e);
      });
    };
  }, []);

  return (
    <>
      <section className={styles.container} ref={componentRef}>
        <div className={styles.title_block}>
          <div
            onMouseEnter={() => {
              setModalStatus("enter");
              // modalActive.value = true;
            }}
            onMouseLeave={() => {
              setModalStatus("closed");
              // modalActive.value = false;
            }}
            className={`${styles.title_1} ${rockitFont.className}`}
          >
            <div className={`${styles.title_row} ${styles.title_row_1}`}>
              <div className={styles.title_charts_cont} id="ry">
                <span className={rockitFont.className} ref={ry}>
                  IYANU
                </span>
              </div>
              <div className={styles.title_charts_cont} id="fo">
                <span className={rockitFont.className} ref={fo}>
                  OL
                </span>
              </div>
              <div className={styles.title_charts_cont} id="ssil">
                <span className={rockitFont.className} ref={ssil}>
                  UWA
                </span>
              </div>
            </div>
            <div className={`${styles.title_row} ${styles.title_row_2}`}>
              <div className={styles.title_charts_cont} id="tells">
                <span className={rockitFont.className} ref={tells}>
                  FA
                </span>
              </div>
              <div className={styles.title_charts_cont} id="a">
                <span className={rockitFont.className} ref={a}>
                  N
                </span>
              </div>
              <div className={styles.title_charts_cont} id="st">
                <span className={rockitFont.className} ref={st}>
                  OR
                </span>
              </div>
              <div className={styles.title_charts_cont} id="ory">
                <span className={rockitFont.className} ref={ory}>
                  O
                </span>
              </div>
            </div>
          </div>
          <div className={styles.title_2}>
            <div ref={book}>FULLSTACK DEVELOPER</div>
            <div className={styles.desc_1} ref={open}>
              Web & Mobile
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.frame}>
          <PictureFrame />
        </div>
        <Section1A />
      </section>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={modalStatus}
          className={styles.modalContainer}
        >
          <PictureFrame />
        </motion.div>
      </>
    </>
  );
}

export default Section1;
export const fourtyFrames = 1.3333333;
const fiftyFrames = 1.66666;
const twoFrames = 0.666666;
const fourFrames = 0.133333;
const sixFrames = 0.2;

export const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },

  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};
