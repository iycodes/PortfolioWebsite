"use client";

import useIsomorphicLayoutEffect from "@/app/helpers/isomorphicEffect";
import React, { useLayoutEffect, useRef } from "react";
import styles from "./section5.module.scss";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
// import { gsap } from "@/app/lib/gsap";
import { gsap, useGSAP } from "@/app/lib/gsap";
import arrow from "@/public/lottie/Lmm6CXFbzz.json";
import Image from "next/image";
import stockd from "@/public/images/stockd/stcokd_3.png";
import stockd1 from "@/public/images/stockd/stcokd_2.png";
import stockd2 from "@/public/images/stockd/stockd_5.png";

function Section5() {
  const componentRef = useRef(null);
  const slider = useRef(null);
  const panels = useRef([]);

  const useGSAP_options = {
    scope: componentRef,
  } as any;

  useGSAP(() => {
    // console.log("reloaded section5");
    let panels1 = gsap.utils.toArray(panels.current);
    gsap.to(panels1, {
      xPercent: -100 * panels1.length,
      ease: "none",
      scrollTrigger: {
        trigger: slider.current,
        // anticipatePin: 1,
        pin: true,
        scrub: 0.6,

        // snap: {
        //   snapTo: 1 / panels1.length,
        //   duration: 0.3,
        //   delay: 0.3,
        //   ease: "power1.inOut",
        // },
        // end: () => "+=" + slider.current.offsetWidth,
        end: () => "+=2000",
      },
    });
  }, []);

  return (
    <div ref={componentRef}>
      <div ref={slider} className={styles.containerr}>
        <div className={`${styles.entry} ${styles.panel}`}>
          <div className={styles.main}>PORTFOLIO!</div>
          <div>
            {/* <Lottie options={defaultOptions} height={200} width={200} />  */}
            {/* <Player src={arrow} /> */}
            {/* <Lottie animationData={arrow} className={styles.anim} loop={true} /> */}
          </div>
        </div>
        <div
          ref={(e: never) => {
            panels.current.push(e) as any;
          }}
          className={styles.project_container}
        >
          <ProjectDone />
        </div>
        <div
          ref={(e: never) => {
            panels.current.push(e) as any;
          }}
          className={styles.project_container}
        >
          <ProjectDone />
        </div>
        <div
          ref={(e: never) => {
            panels.current.push(e) as any;
          }}
          className={styles.project_container}
        >
          <ProjectDone />
        </div>
        <div
          ref={(e: never) => {
            panels.current.push(e) as any;
          }}
          className={styles.project_container}
          // className={`${styles.panel} ${styles.red}`}
        >
          <ProjectDone />
        </div>
        <div
          ref={(e: never) => {
            panels.current.push(e) as any;
          }}
          className={styles.project_container}
          // className={`${styles.panel} ${styles.red}`}
        >
          {/* <ProjectDone />  */}
        </div>
      </div>
    </div>
  );
}

export default Section5;

export const ProjectDone = () => {
  return (
    <div className={styles.container2}>
      <div className={styles.card}>
        <div className={styles.shape1}>
          <div className={styles.imageCard1}>
            <Image src={stockd} alt="" />
          </div>
          <div className={styles.text}>
            <h2>StockD</h2>
            <p>
              Stockd is an enterprise level ecommerce fullstack application that
              I{"'"}m currently working on using <strong>Flutter</strong> and{" "}
              <strong>Fastify(NodejS) </strong>
              frameworks.
            </p>
          </div>
          <div className={styles.imageCard2}>
            <Image src={stockd2} alt="" />
          </div>
        </div>
        <div className={styles.shape2}></div>
      </div>
      <div className={styles.details}>
        <div className={styles.tech_stack}>
          <div className={styles.frontend}>
            <div className={styles.title}> FRONTEND </div>
            <div> Language - Dart </div>
            <div>Framework- Flutter</div>
            <div> Client state managment - Flutter Bloc</div>
            <div>Server state manegment - DIO</div>
          </div>
          <div className={styles.hori_line}></div>
          <div className={styles.backend}>
            <div className={styles.title}> BACKEND </div>
            <div> Language - Typescript </div>
            <div>Runtime - Nodejs</div>
            <div>Framework - Fastify</div>
            <div> Database - PostgresSql </div>
          </div>
        </div>
        <div className={styles.desc}>
          <div className={styles.vert_line}></div>
          <div className={styles.text}>
            My Aim and Motivation for building this project is to connect
            Buyers, Sellers , and service providers around My University. As
            most online vendors in my University rely on whatsapp to advertise
            their goods and service, which isn{"'"}t conveient so i saw an
            opportunity. Although the app isn{"'"}t fully ready because i{"'"}
            ve been busy with school activities , Trust it will be ready soon.
          </div>
        </div>
      </div>
    </div>
  );
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: arrow,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
