"use client";
import React, { useEffect, useRef } from "react";
import styles from "./stackCards.module.scss";
// import { ScrollTrigger, gsap } from "@/app/lib/gsap";
import { Tween } from "framer-motion";
import useIsomorphicLayoutEffect from "@/app/helpers/isomorphicEffect";
import { start } from "repl";

import { gsap, useGSAP, ScrollTrigger } from "@/app/lib/gsap";

const StackedCards = () => {
  const componentRef = useRef(null);
  const cardRefs = useRef<[]>([]);
  const headingRef = useRef(null);
  const cardss = useRef(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    console.log("scroll position is ", scrollPosition);
  };
  const spacer = 10;
  const minScale = 0.85;
  // useEffect(() => {
  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // useGSAP(() => {
  //   const scr = () => "+=" + window.innerHeight * (allProjects.length / 2);
  //   const cards = gsap.utils.toArray(".cardz");
  //   const spacer = 10;
  //   const minScale = 0.85;

  //   const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

  //   cards.forEach((card: any, index) => {
  //     const scaleVal = distributor(index, cards[index], cards);

  //     const tween = gsap.to(card, {
  //       scrollTrigger: {
  //         trigger: card,
  //         start: `top top`,
  //         scrub: true,
  //         markers: true,
  //         invalidateOnRefresh: true,
  //       },
  //       ease: "sine.in",
  //       scale: scaleVal,
  //     });

  //     ScrollTrigger.create({
  //       trigger: card,
  //       start: `top-=${index * spacer} top`,
  //       endTrigger: ".cardsz",
  //       end: `bottom top+=${200 + cards.length * spacer}`,
  //       pin: true,
  //       pinSpacing: false,
  //       markers: true,
  //       id: "pin",
  //       invalidateOnRefresh: true,
  //     });
  //   });
  //   gsap.to(headingRef.current, {
  //     scrollTrigger: {
  //       trigger: headingRef.current,
  //       start: "top 20%",
  //       endTrigger: ".cardsz",
  //       // end: scr(),
  //       pin: true,
  //     },
  //   });
  // });
  useGSAP(() => {
    cardss.current;
    const cards = gsap.utils.toArray(cardRefs.current);
    const scr = () => "+=" + window.innerHeight * (allProjects.length / 2);
    cards.forEach((card: any, index) => {
      const tween = gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: () => `top top`,
          // end: () => `top top+=200`,
          // end: "max",
          scrub: true,
          markers: true,
          invalidateOnRefresh: true,
        },
        ease: "sine.in",
        scale: () => 1 - (cards.length - index) * 0.01,
      });

      //     const tween = gsap.to(card, {
      //       scrollTrigger: {
      //         trigger: card,
      //         start: `top top`,
      //         scrub: true,
      //         markers: true,
      //         invalidateOnRefresh: true,
      //       },
      //       ease: "sine.in",
      //       scale: scaleVal,
      //     });

      ScrollTrigger.create({
        trigger: card,
        endTrigger: ".cardsz",
        // start: "top top",
        start: `top-=${index * spacer} top`,
        pin: true,
        pinSpacing: false,
        markers: true,
        id: "pin",
        end: `bottom top+=${200 + cards.length * spacer}`,
        invalidateOnRefresh: true,
      });
    });

    gsap.to(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 20%",
        end: "max",
        pin: true,
      },
    });
  }, []);

  return (
    <div className={styles.component} ref={componentRef}>
      <div className={styles.container}>
        <div ref={cardss} className={`${styles.cards} cardsz`}>
          <h1 ref={headingRef} className={styles.h1}>
            MORE PORJECTS
          </h1>
          {allProjects.map((e, i) => (
            <div
              key={`card${i}`}
              className={`${styles.card} cardz`}
              ref={(e: never) => cardRefs.current.push(e) as any}
            >
              <Card
                title={e.title}
                link={e.link}
                body={e.body}
                tools={e.tools}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.container2}></div>
    </div>
  );
};

export default StackedCards;

const Card = ({ title, body, link, tools }: cardProps) => {
  return (
    <>
      <div className={styles.head}>
        <span className={styles.title}>{title}</span>
        <button>
          <a href={link}>View</a>
          <div className={styles.line}></div>
        </button>
      </div>
      <div className={styles.body}>{body}</div>
      <div className={styles.bottom}>
        <div>Toolings</div>
        <div>
          {tools.map((e, i) => (
            <span key={`tool${i}`} className={styles.tool}>
              {e}
            </span>
          ))}
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
  // {
  //   title: "Countdown Timer",
  //   body: `This is a javascript package i created for using
  //     a countdown timer in your application. Basically just a setInterval function with conditional expressions`,
  //   link: "http://github.com",
  //   tools: ["Javscript", "Git"],
  // },
  // {
  //   title: "Next js Dashbaord",
  //   body: `The main project of the official NextJs Course by the NextJs team`,
  //   link: "https://github.com/iycodes/nextjs-dashboard",
  //   tools: ["Nextjs", "typeScript", "postgres sql", "vervel postgres", "Git"],
  // },
  // {
  //   title: "Login UI ",
  //   body: `My very first flutter application. Just a login UI , no functionalities`,
  //   link: "https://github.com/iycodes/Mordern-login-UI",
  //   tools: ["Flutter", "Git"],
  // },
  // {
  //   title: "Cloud9 api",
  //   body: `Backend of the cloud9 social media web app`,
  //   link: "https://github.com/iycodes/cloud9-api",
  //   tools: ["Nodejs", "Fastify", "Postgres SQL", "Prisma", "Postman", "Git"],
  // },
  // {
  //   title: "Stockd api",
  //   body: `Backend of my Ecommerce app`,
  //   link: "https://github.com/iycodes/cloud9-api",
  //   tools: [
  //     "Nodejs",
  //     "TypeScript",
  //     "Fastify",
  //     "Postgres SQL",
  //     "Prisma",
  //     "Postman",
  //     "Git",
  //   ],
  // },
];
