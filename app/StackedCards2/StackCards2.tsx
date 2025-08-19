"use client";
import React from "react";
import styles from "./StackCards2.module.scss";
import { ScrollTrigger, gsap, useGSAP } from "../lib/gsap";
function StackCards2() {
  useGSAP(() => {
    const cards = gsap.utils.toArray(".cardz");
    const spacer = 10;
    const minScale = 0.85;

    const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

    cards.forEach((card: any, index) => {
      const scaleVal = distributor(index, cards[index], cards);

      const tween = gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top top`,
          scrub: true,
          // markers:true,
          invalidateOnRefresh: true,
        },
        ease: "none",
        scale: scaleVal,
      });

      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * spacer} top`,
        endTrigger: ".cardsz",
        end: `bottom top+=${200 + cards.length * spacer}`,
        pin: true,
        pinSpacing: false,
        // markers:true,
        id: "pin",
        invalidateOnRefresh: true,
      });
    });
  });
  return (
    <div className={styles.body}>
      <div className="container">
        <h1>Stacking Cards</h1>
        <div className={`${styles.cards} cardsz`}>
          <div className={`${styles.card} cardz`} style={{ top: 40 }}>
            1
          </div>
          <div className={`${styles.card} cardz`} style={{ top: 45 }}>
            2
          </div>
          <div className={`${styles.card} cardz`} style={{ top: 50 }}>
            3
          </div>
          <div className={`${styles.card} cardz`} style={{ top: 55 }}>
            4
          </div>
          <div className={`${styles.card} cardz`} style={{ top: 60 }}>
            5
          </div>
        </div>
      </div>
      <div className={styles.container2}></div>
    </div>
  );
}

export default StackCards2;
