"use client";
import React, { useEffect, useRef } from "react";
import styles from "./stackCards.module.scss";
// import { ScrollTrigger, gsap } from "@/app/lib/gsap";
import { Tween } from "framer-motion";
import useIsomorphicLayoutEffect from "@/app/helpers/isomorphicEffect";
import { start } from "repl";

import { gsap, useGSAP, ScrollTrigger } from "@/app/lib/gsap";
// import {  ScrollSmoother } from "@/app/lib/gsap";

const StackedCards = () => {
  const componentRef = useRef(null);
  const cardRefs = useRef<[]>([]);
  const headingRef = useRef(null);
  const cardss = useRef(null);
  const useGSAP_options = {
    scope: componentRef,
  } as any;

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    console.log("scroll position is ", scrollPosition);
  };
  // useEffect(() => {
  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // const smoother = useRef<ScrollSmoother>();
  useGSAP(() => {
    cardss.current;
    const cards = gsap.utils.toArray(cardRefs.current);
    const scr = () => "+=" + window.innerHeight;
    ScrollTrigger.create({
      trigger: cardss.current,
      start: "top center",
      end: "top center",
    });
    cards.forEach((card: any, index) => {
      const tween = gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: () => `top bottom-=100`,
          end: () => `top top+=200`,
          // scrub: 10,
          // markers:true,
          invalidateOnRefresh: true,
        },
        // scrol
        // duration: 3,
        ease: "sine.in",
        scrollBehavior: "smooth",
        scale: () => 1 - (cards.length - index) * 0.01,
      });

      ScrollTrigger.create({
        trigger: card,
        endTrigger: cardss.current,
        end: "bottom center",
        // start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: 10,
        // markers:true,
        id: "pin",
        // preventOverlaps: true,
        // end: "+=" + window.innerHeight / 2,
        invalidateOnRefresh: true,
      });
    });

    gsap.to(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 20%",
        endTrigger: cardss.current,
        pin: true,
      },
    });
  }, []);

  return (
    <div className={styles.component} ref={componentRef}>
      <div ref={cardss} className={styles.cards}>
        <h1 ref={headingRef} className={styles.h1}>
          MORE PORJECTS
        </h1>
        {allProjects.map((e, i) => (
          <div
            key={`card${i}`}
            className={styles.card}
            ref={(e: never) => cardRefs.current.push(e) as any}
          >
            <Card title={e.title} link={e.link} body={e.body} tools={e.tools} />
          </div>
        ))}
      </div>
      <div className={styles.container2}></div>
    </div>
  );
};

export default StackedCards;

const Card = ({ title, body, link, tools }: cardProps) => {
  return (
    <>
      <div>
        <div className={styles.head}>
          <span className={styles.title}>{title}</span>
          <button>
            <a href={link}>View</a>
            <div className={styles.line}></div>
          </button>
        </div>
        <div className={styles.body}>{body}</div>
        <div className={styles.bottom}>
          <div className={styles.title}>Toolings</div>
          <div className={styles.tools}>
            {tools.map((e, i) => (
              <span key={`tool${i}`} className={styles.tool}>
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

type cardProps = {
  title: string;
  body: string;
  link: string;
  tools: string[];
};

const allProjects: Array<cardProps> = [
  {
    title: "Countdown Timer",
    body: `This is a javascript package i created for using 
      a countdown timer in your application. Basically just a setInterval function with conditional expressions`,
    link: "http://github.com",
    tools: ["Javscript", "Git"],
  },
  {
    title: "Slot Machine",
    body: `a slot machine written in python where users can deposit 
      and bet on a number of lines, the result of the slot machine spin is printed in the terminal.
       Basically just taking data and 
      manipulating three dimensional arrays`,
    link: "http://github.com",
    tools: ["Python", "Git"],
  },
  {
    title: "Vanilla Js SSR crud application",
    body: `This is a server side crud application that returns html as response. SSR website without an SSR framework`,
    link: "http://github.com",
    tools: ["ExpressJS(NODE JS)", "Typescript", "Git"],
  },
  {
    title: "Todo mobile app",
    body: `JUST YOUR REGULAR TODO APPLICATION`,
    link: "https://github.com/iycodes/TODO-flutter-app",
    tools: ["Flutter", "Git"],
  },
  {
    title: "Countdown Timer",
    body: `This is a javascript package i created for using 
      a countdown timer in your application. Basically just a setInterval function with conditional expressions`,
    link: "http://github.com",
    tools: ["Javscript", "Git"],
  },
  {
    title: "Next js Dashbaord",
    body: `The main project of the official NextJs Course by the NextJs team`,
    link: "https://github.com/iycodes/nextjs-dashboard",
    tools: ["Nextjs", "typeScript", "postgres sql", "vervel postgres", "Git"],
  },
  {
    title: "Login UI ",
    body: `My very first flutter application. Just a login UI , no functionalities`,
    link: "https://github.com/iycodes/Mordern-login-UI",
    tools: ["Flutter", "Git"],
  },
  {
    title: "Cloud9 api",
    body: `Backend of the cloud9 social media web app`,
    link: "https://github.com/iycodes/cloud9-api",
    tools: ["Nodejs", "Fastify", "Postgres SQL", "Prisma", "Postman", "Git"],
  },
  {
    title: "Stockd api",
    body: `Backend of my Ecommerce app`,
    link: "https://github.com/iycodes/cloud9-api",
    tools: [
      "Nodejs",
      "TypeScript",
      "Fastify",
      "Postgres SQL",
      "Prisma",
      "Postman",
      "Git",
    ],
  },
];
