"use client";
import React, { ReactNode, useRef } from "react";
import styles from "./syles.module.scss";
import Image, { StaticImageData } from "next/image";
import gitHubIcon from "@/public/icons/github.png";
import xIcon from "@/public/icons/x.png";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "@/app/helpers/isomorphicEffect";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useGSAP } from "@gsap/react";

function Card1() {
  const componentRef = useRef(null);
  const textRef = useRef(null);

  const useGSAP_options = {
    scope: componentRef,
  } as any;
  useGSAP(() => {
    const timeline = gsap.timeline({ ease: "sine.out" });
    timeline.fromTo(
      textRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 3,
      }
    );
    ScrollTrigger.create({
      trigger: ".box-c",
      pin: true,
      start: "center center",
      end: "+=300",
      // markers:true,
    });
  }, []);

  return (
    <div ref={componentRef} className={styles.layout}>
      <div className={styles.header}>
        <span ref={textRef}>Hi im iycodes</span>
        <span className={styles.icons}>
          <Icon child={<FaXTwitter />} />
          <Icon child={<FaGithub />} />
        </span>
      </div>
      <div className={styles.line}> </div>

      <div className={styles.body}>
        <p>
          I{"'"}m a Full stack developer, With expertise in Web development,
          Web3 development and cross platform development(Flutter) I{"'"}m also
          pretty good at python. My arsenal includes tech like: React, Three js,
          Figma and other supporting libraries (Redux, Scss etc.) .
        </p>
        <p>
          {" "}
          I have worked in many big tech companies like Apple and Google as a
          Full stack developer.{" "}
        </p>
        <p>These are some of my recent projects:</p>
      </div>
    </div>
  );
}

export default Card1;

const Icon = ({ child }: { child: ReactNode }) => {
  return <span className={styles.iconBox}>{child}</span>;
};
