"use client";

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./section2.module.scss";
import useIsomorphicLayoutEffect from "@/app/helpers/isomorphicEffect";

import { gsap, useGSAP } from "@/app/lib/gsap";

import SplitType from "split-type";

function Section2() {
  const section2 = useRef(null);
  const text = useRef(null);
  const title = useRef(null);
  const line = useRef(null);
  const text2 = useRef(null);
  const useGSAP_options = {
    scope: section2,
    dependencies: [],
  } as any;

  useGSAP(() => {
    // const myText = new SplitText(
    //   text2.current
    //   //    {
    //   //   type: "chars",
    //   // }
    // );
    const myText = new SplitType("#texttt", {
      types: "chars",
    });
    // console.log("chars is", myText.chars);

    // const myText = new Split2("#texttt");

    gsap.set(section2.current, {
      marginBottom: window.innerHeight,
    });
    const chars = myText.chars;
    gsap.to(chars, {
      scrollTrigger: {
        trigger: section2.current,
        // start: "top bottom-=100",
        start: "top top",
        // end: "bottom bottom",
        scrub: true,
      },
      color: "rgb(227, 246, 247)",
      stagger: {
        amount: 20,
      },
    });
    const tl = gsap.timeline({
      // paused: true,
      scrollTrigger: {
        trigger: section2.current,
        pin: true,
        scrub: 3,
        // markers: true,
        start: "top top",
        end: `+=${window.innerHeight * 2 + 100}`,
        // end: "bottom",
        toggleActions: "play reverse play reverse",
      },
    });
    // tl.from(text2.current, {
    //   scale: 0.5,
    // }),
    tl.to(
      title.current,
      {
        // paused: true,
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section2.current,
          scrub: 1,
          start: "top center",
          end: "+=10",
        },
      },
      "<"
    )
      .fromTo(
        text2.current,
        {
          scale: 0.7,
        },
        {
          // autoAlpha: 1,
          scale: 1,
          scrollTrigger: {
            trigger: section2.current,

            scrub: 1,
            start: "top center",
            end: "+=1",
          },
        },

        "<"
      )
      .to(
        line.current,
        {
          width: "100%",
          // ease: "power1.out",
          ease: "none",
          scrollTrigger: {
            trigger: section2.current,
            scrub: 3,
            // markers: true,
            start: "top top",
            // end: `+=${window.innerHeight + 500}`,
            end: `+=${window.innerHeight - 100}`,
            toggleActions: "play reverse play reverse",
          },
        },
        "<"
      );
  }, []);
  return (
    <div ref={section2} className={styles.section2}>
      <div className={styles.title}>
        <div ref={title} className={styles.title_text}>
          {" "}
          BRIEF INTRODUCTION
        </div>
        <div ref={line} className={styles.line}></div>
      </div>
      <div id="texttt" ref={text2} className={`${styles.text2} texttt`}>
        I am a versatile Software Developer proficient in backend, web, web3 and
        cross platform mobile development. With a passion for creating seamless
        digital experiences, I bring a comprehensive skill set to the table.
        From crafting robust backend systems to designing intuitive user
        interfaces and developing mobile applications, I thrive on delivering
        end-to-end solutions. My dedication to staying abreast of the latest
        technologies ensures that I can tackle diverse challenges in the
        ever-evolving landscape of web and mobile development.
      </div>
    </div>
  );
}

export default Section2;
{
  /* I am a versatile <strong>Full </strong> <strong>Stack </strong>{" "} <strong>Developer </strong> */
}

// split.lines.forEach((target) => {
//   gsap.to(target, {
//     // paused: true,
//     backgroundPositionX: 0,
//     ease: "none",
//     scrollTrigger: {
//       trigger: target,
//       //   markers: true,
//       scrub: 1,
//       start: "top center",
//       end: "bottom center",
//     },
//   });
// });
