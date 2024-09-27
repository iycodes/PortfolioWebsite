import React, { Suspense, useEffect } from "react";
import { sleep } from "./helpers/helperFunctions";
import styles from "./page.module.scss";
import Card1 from "./components/card1/Card1";
import Section1 from "./sections/section1/section1";
import Preloader from "./components/preloader/preloader";
import useIsomorphicLayoutEffect from "./helpers/isomorphicEffect";
// import { gsap } from "./lib/gsap";
import Home from "./Home/Home";
import Homl from "./a";
import Section5 from "./sections/section5/section5";
import PictureFrame from "./components/pictureFrame/PictureFrame";
import Section2 from "./sections/section2/section2";

import { motion } from "framer-motion";

import Menu from "./components/menu/Menu";
import Contact from "./sections/contact/contact";
import Footer from "./sections/Footer/Footer";
import TechStack from "./sections/techstack/TechStack";
import { Scroll } from "./sections/ParallaxTexts/ParallaxTexts";
import StackedCards from "./sections/stackedCards/stackedCards";
// import ScrollSmoothnerWrapper from "./ScrollSmoothner";
import Section5_mobile from "./sections/Section5_mobile/Section5_mobile";
import StackCards2 from "./StackedCards2/StackCards2";
import Header from "./components/Header/Header";
import localFont from "next/dist/compiled/@next/font/dist/local";

// const Home = React.lazy(() => import("./Home/Home"));
// const Homr = React.lazy(() => Homm());
//

export default async function Page() {
  await sleep(3000);

  return (
    <div>
      {/* <ScrollSmoothnerWrapper> */}
      {/* <Scroll /> */}
      {/* <Menu /> */}
      {/* <Section3 /> */}
      {/* <Section2 /> */}
      {/* <TechStack /> */}
      <Contact />
      {/* <Footer /> */}
      {/* <Header /> */}
      {/* <Preloader /> */}
      {/* <Home /> */}
      {/* <StackedCards /> */}
      {/* <Section5_mobile />
      <Section5 /> */}
      {/* <Projects /> */}
      {/* <StackCards2 /> */}
      {/* <StackedCards /> */}

      {/* <Projectss /> */}

      {/* <Section5 /> */}
      {/* <Section2 /> */}
      {/* <Section2 />
      <Section2 />
      <Section2 /> */}

      {/* <Section3 /> */}
      {/* <Section4 /> */}
      {/* <Textdata /> */}
      {/* <PictureFrame /> */}
      {/* </ScrollSmoothnerWrapper> */}
    </div>
  );
}
