import gsap from "gsap";
import {
  CustomEase,
  ScrollTrigger,
  // ScrollSmoother,
  // SplitText,
} from "gsap/src/all";

import { useGSAP } from "@gsap/react";
ScrollTrigger.config({ ignoreMobileResize: true });

gsap.registerPlugin(
  CustomEase,
  ScrollTrigger,
  // ScrollSmoother,
  useGSAP
);
gsap.defaults({
  // force3D: true,
});
const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;
const RECIPROCAL_GR = 1 / GOLDEN_RATIO;
const DURATION = RECIPROCAL_GR;
const EASE2 = CustomEase.create("ease", "0.175, 0.885, 0.32, 1");
const customEaseIn = CustomEase.create(
  "custom-ease-in",
  "0.52, 0.00, 0.48, 1.00"
);

// Configuring GSAP with custom settings that aren't Tween-specific
// gsap.config({
//   autoSleep: 60,
//   nullTargetWarn: false,
// });

// // Setting default animation properties that should be inherited by ALL tweens
// gsap.defaults({
//   duration: DURATION,
//   ease: EASE2,
// });
export {
  CustomEase,
  DURATION,
  EASE2,
  customEaseIn,
  GOLDEN_RATIO,
  gsap,
  // ScrollSmoother,
  ScrollTrigger,
  useGSAP,
};
