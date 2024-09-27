import useIsomorphicLayoutEffect from "@/app/helpers/isomorphicEffect";
import React, { useLayoutEffect, useRef } from "react";
import styles from "./section5.module.scss";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
// import { gsap } from "@/app/lib/gsap";
import { gsap } from "@/app/lib/gsap";

function Section5() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  //   gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
        first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
        the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <h3>Section 1</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 2</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 3</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;
