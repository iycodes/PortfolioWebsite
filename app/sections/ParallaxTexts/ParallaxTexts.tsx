"use client";
import React, { useEffect, useState, useRef, useContext } from "react";
import "./style.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SmoothScroll from "../../components/smoothscroll";
// import { SmoothScrollContext } from "../../components/smoothscroll";

gsap.registerPlugin(ScrollTrigger);

function shuffleArray(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const Scroll = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const scrollingContainerRef = useRef(null);
  const scrollingContainerRef1 = useRef(null);
  const scrollingContainerRef2 = useRef(null);
  const scrollingContainerRef3 = useRef(null);

  useEffect(() => {
    // Shuffle the disciplines data before setting it to state
    const shuffledData = shuffleArray([...disciplinesData]);
    setGalleryItems(shuffledData);
  }, []);
  //   const { refreshScrollTrigger } = useContext(SmoothScrollContext);

  useEffect(() => {
    const initScrollTrigger = () => {
      const scroller = document.querySelector(".viewport");
      //   ScrollTrigger.scrollerProxy(scroller, {
      //     scrollTop(value) {
      //       return arguments.length
      //         ? scroller.scrollTo(0, value, 0)
      //         : scroller.scrollTop;
      //     },
      //     getBoundingClientRect() {
      //       return {
      //         top: 0,
      //         left: 0,
      //         width: window.innerWidth,
      //         height: window.innerHeight,
      //       };
      //     },
      //   });

      // Create the timeline instance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scroller,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Add animations to the timeline concurrently
      tl.add(
        gsap.fromTo(
          scrollingContainerRef.current,
          { xPercent: -100 },
          { xPercent: 0, duration: 1 }
        )
      );

      tl.add(
        gsap.fromTo(
          scrollingContainerRef1.current,
          { xPercent: 0 },
          { xPercent: -100, duration: 1 }
        ),
        0 // This ensures the animation starts at the same time as the first
      );

      tl.add(
        gsap.fromTo(
          scrollingContainerRef2.current,
          { xPercent: -90 },
          { xPercent: 0, duration: 1 }
        ),
        0 // This ensures the animation starts at the same time as the first
      );

      tl.add(
        gsap.fromTo(
          scrollingContainerRef3.current,
          { xPercent: 0 },
          { xPercent: -100, duration: 1 }
        ),
        0 // This ensures the animation starts at the same time as the first
      );
    };

    if (scrollingContainerRef.current) {
      initScrollTrigger();
    }

    // Call refreshScrollTrigger after the timeline has been created to ensure ScrollTrigger is updated
    // refreshScrollTrigger();
  }, []);

  //   useEffect(() => {
  //     window.addEventListener("load", refreshScrollTrigger);
  //     return () => {
  //       window.removeEventListener("load", refreshScrollTrigger);
  //     };
  //   }, []);

  return (
    <div className="container-fluid">
      <section className="Scroll">
        <div className="disciplines">
          titleeee
          <div
            className="works-scrolling-container"
            ref={scrollingContainerRef}
            data-speed="8"
          >
            {galleryItems.map((discipline, index) => (
              <span
                key={index}
                className="h1 works-discipline-0 discipline-item"
              >
                {discipline}
              </span>
            ))}
          </div>
          <div
            className="works-scrolling-container"
            ref={scrollingContainerRef1}
          >
            {galleryItems.map((discipline, index) => (
              <span
                key={index}
                className="h1 works-discipline-1 discipline-item"
              >
                {discipline}
              </span>
            ))}
          </div>
          <div
            className="works-scrolling-container"
            ref={scrollingContainerRef2}
          >
            {galleryItems.map((discipline, index) => (
              <span
                key={index}
                className="h1 works-discipline-2 discipline-item"
              >
                {discipline}
              </span>
            ))}
          </div>
          <div
            className="works-scrolling-container"
            ref={scrollingContainerRef3}
          >
            {galleryItems.map((discipline, index) => (
              <span
                key={index}
                className="h1 works-discipline-3 discipline-item"
              >
                {discipline}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const disciplinesData = [
  "Design & Art Direction",
  "Web Design & Development",
  "UI/UX Design",
  "NFT & Web3 Services",
  "Brand Strategy & Identity",
  "Live Show Production & Activation",
  "Mobile App Development",
  "Video Production & Animation",
  "3D Rendering",
  "Photography",
];
