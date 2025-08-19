import React, { useRef } from "react";
import styles from "./section1A.module.scss";
import outerText from "@/public/icons/outertext.svg";
import idea from "@/public/icons/idea.svg";
import innerText from "@/public/icons/innerText.svg";
import Image from "next/image";
import useIsomorphicLayoutEffect from "@/app/helpers/isomorphicEffect";
// import { gsap } from "@/app/lib/gsap";
import { gsap, useGSAP } from "@/app/lib/gsap";
import { Linear } from "gsap-trial";

function Section1A() {
  const componentRef = useRef(null);
  const circle = useRef(null);
  const outerSvg = useRef(null);
  const bulb = useRef(null);
  const spikes = useRef(null);
  const circleBorder = useRef(null);

  const container_D = useRef(null);
  const circle_D = useRef(null);
  const outerSvg_D = useRef(null);
  const bulb_D = useRef(null);
  const spikes_D = useRef(null);
  const circleBorder_D = useRef(null);
  const titleRef_D = useRef(null);

  const useGSAP_options = {
    scope: componentRef,
  } as any;
  useGSAP(() => {
    const matchMedia = gsap.matchMedia();
    matchMedia.add(
      "(max-width: 799px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: circle.current,
            start: "bottom 80%",
            // markers: true,
            onEnter: () => {
              console.log("moti wole oo");
            },
          },
        });
        tl.fromTo(
          circle.current,
          {
            scale: 0.01,
            // display: "none",
          },
          {
            ease: "elastic.inOut",
            scale: 1,
            duration: 1.5,
          },
          "0"
        )
          .to(
            spikes.current,
            {
              rotation: 360,
              ease: Linear.easeNone,
              duration: 5,
              repeat: -1,
              animationDirection: "reverse",
              reversed: true,
            },
            "0"
          )
          .to(
            circleBorder.current,
            {
              rotation: 360,
              ease: Linear.easeNone,
              duration: 10,
              repeat: -1,
            },
            "0"
          );
      },
      componentRef
    );

    matchMedia.add(
      "(min-width: 800px)",
      () => {
        const tlDesktop = gsap.timeline({
          scrollTrigger: {
            trigger: circle_D.current,

            start: "bottom bottom",
            // markers: true,
            // markers: {
            //   startColor: "white",
            //   endColor: "white",
            // },
            onEnter: () => {
              console.log("moti wole oo");
            },
          },
        });
        tlDesktop
          .fromTo(
            circle_D.current,
            {
              scale: 0.01,
              // display: "none",
            },
            {
              ease: "elastic.inOut",
              scale: 1,
              duration: 1.5,
            }
          )
          .to(
            spikes_D.current,
            {
              rotation: 360,
              ease: Linear.easeNone,
              duration: 5,
              repeat: -1,
              // animationDirection: "reverse",
              reversed: true,
            },
            "0"
          )
          .to(
            circleBorder_D.current,
            {
              rotation: 360,
              ease: Linear.easeNone,
              duration: 10,
              repeat: -1,
            },
            "0"
          );
      },
      componentRef
    );
  }, []);
  useIsomorphicLayoutEffect(() => {}, []);
  return (
    <>
      <div ref={componentRef} className={styles.container}>
        <div ref={titleRef_D} className={styles.title}>
          Good design creates meaningful and memorable connections
        </div>
        <div className={styles.body}>
          <div ref={circle_D} className={styles.circular_text}>
            <div ref={circleBorder_D} className={styles.border}></div>
            <Image
              alt=""
              ref={outerSvg_D}
              src={outerText}
              className={styles.outerSvg}
            />
            <Image alt="" src={idea} className={styles.innerSvg} />
            <Image
              ref={spikes_D}
              src={innerText}
              alt=""
              className={styles.spikes}
            />
          </div>
          <div className={styles.text}>
            <p>
              Create digital solutions that are not only functional and
              aesthetically pleasing, but also deeply impactful, memorable and
              meaningful to improve people{"'"}s lives.
            </p>
            <p>
              These solutions represent a constant commitment to excellence and
              innovation, to offer experiences that last in the collective
              memory.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container_mobile}>
        <div ref={circle} className={styles.circular_text}>
          <div ref={circleBorder} className={styles.border}></div>
          <Image
            alt=""
            ref={outerSvg}
            src={outerText}
            className={styles.outerSvg}
          />
          <Image alt="" src={idea} className={styles.innerSvg} />
          <Image
            ref={spikes}
            src={innerText}
            alt=""
            className={styles.spikes}
          />
        </div>
        <div className={styles.title}>
          Good design creates meaningful and memorable connections
        </div>
        <div className={styles.text}>
          <p>
            Create digital solutions that are not only functional and
            aesthetically pleasing, but also deeply impactful, memorable and
            meaningful to improve people{"'"}s lives.
          </p>
          <p>
            These solutions represent a constant commitment to excellence and
            innovation, to offer experiences that last in the collective memory.
          </p>
        </div>
      </div>
    </>
  );
}

export default Section1A;
