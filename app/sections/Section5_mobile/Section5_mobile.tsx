"use client";
import React from "react";
import styles from "./section5_mobile.module.scss";
import Image from "next/image";
import photo from "@/public/images/project_banner.webp";
import { CustomEase, gsap, useGSAP } from "@/app/lib/gsap";

function Section5_mobile() {
  useGSAP(() => {
    const tl = gsap.timeline({});
    const allProjects = gsap.utils.toArray(".project_mobile");
    const allImages = gsap.utils.toArray(".project_image") as any;

    allProjects.forEach((e: any, i) => {
      const tween = gsap.fromTo(
        e,
        {
          autoAlpha: 0.4,
        },
        {
          // ease: "sine.in",
          // duration: 0.5,
          ease: "none",

          autoAlpha: 1,
          scrollTrigger: {
            trigger: e,
            // start: "",
            // end: () => "+=600",
            end: `+=${window.innerHeight * 0.5}`,

            toggleActions: "play none play reverse",
            scrub: 1.5,
          },
        }
      );
      
      const tween2 = gsap.fromTo(
        allImages[i],
        {
          x: i % 2 == 0 ? -120 : 120,
          //   x: -100,
        },
        {
          ease: "sine.in",
          x: i % 2 == 0 ? -40 : 40,

          //   duration: 0.3,
          scrollTrigger: {
            trigger: e,
            start: "top bottom",
            // end: "top center+=300",
            // end: () => "+=600",
            end: `+=${window.innerHeight * 0.5}`,
            scrub: 1.5,
            toggleActions: "play none play reverse",
          },
        }
      );
    });
  });
  return (
    <div className={styles.component}>
      <div className={styles.main}>PORTFOLIO!</div>
      {mainProjects.map((e, i) => (
        <Project key={"project_mobile" + i} image="" title="" desc="" />
      ))}
    </div>
  );
}

export default Section5_mobile;

const Project = (project_props: projectProps) => {
  return (
    <div className={`${styles.project}  project_mobile`}>
      <div className={`${styles.image} project_image `}>
        <Image src={photo} alt="" style={{ width: "100%", height: "auto" }} />
      </div>
      <div className={styles.details}>
        <div className={styles.area}>Web Application</div>
        <div className={styles.title}>Iycodes App</div>
        <div className={styles.desc}>
          Web application to do blah blah blah blah blah in blah blah blah blah
          blah
        </div>
        <ul className={styles.tools}>
          <BulletItem text="flutter" />
          <BulletItem text="node js" />
          <BulletItem text="postsgres" />
          <BulletItem text="prisma" />
        </ul>
        <div className={styles.link}>
          <a href="https://github.com/iycodes">View Project</a>
        </div>
      </div>
    </div>
  );
};

type projectProps = {
  image: string;
  title: string;
  desc: string;
};

const mainProjects = [{}, {}, {}];

const BulletItem = ({ text }: { text: string }) => {
  return (
    // <span>
    <span className={styles.bullet}>
      <span></span> {text}
    </span>
    // </span>
  );
};
