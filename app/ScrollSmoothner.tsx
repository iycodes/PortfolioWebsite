"use client";
import { useGSAP } from "@gsap/react";
// import { ScrollSmoother } from "gsap-trial/all";

import React, { ReactChild, ReactNode, useRef } from "react";
import { gsap, ScrollSmoother } from "@/app/lib/gsap";
import SplitText from "gsap-trial/all";

let userAgentString = navigator.userAgent;
let chromeAgent = userAgentString.indexOf("Chrome") > -1;

// Detect Safari
let safariAgent = userAgentString.indexOf("Safari") > -1;

// Discard Safari since it also matches Chrome
if (chromeAgent && safariAgent) safariAgent = false;

console.log("safariAgent", safariAgent);
// Detect Opera

//
function ScrollSmoothnerWrapper({ children }: { children: ReactNode }) {
  const componentRef = useRef(null);
  const smoother = useRef<ScrollSmoother>();
  const iswebkit = isWebKit();
  console.log("is webkit", isWebKit);
  useGSAP(() => {
    // smoother.current = ScrollSmoother.create({
    //   smooth: 0.3,
    //   speed: 1,
    //   effects: true,
    //   smoothTouch: 3,
    //   normalizeScroll: true,
    // });
    // ScrollTrigger.create({
    //   trigger: ".box-c",
    //   pin: true,
    //   start: "center center",
    //   end: "+=300",
    //   markers: true,
    // });
  }, []);

  return <div ref={componentRef}>{children}</div>;
}

export default ScrollSmoothnerWrapper;

function isWebKit() {
  return (
    /^iP/.test(navigator.platform || navigator.userAgent) ||
    (/^Mac/.test(navigator.platform || navigator.userAgent) &&
      navigator.maxTouchPoints > 2) ||
    /Safari/.test(navigator.userAgent)
  );
}
