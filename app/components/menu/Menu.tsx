"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Menu.scss";

// import { gsap } from "@/app/lib/gsap";
import { gsap, useGSAP } from "@/app/lib/gsap";
import { Power2, Power4 } from "gsap";
import { signal } from "@preact/signals-core";

export const menuRefSignal = signal<React.LegacyRef<HTMLDivElement> | any>(
  null
);
let menu_active = false;

let menuAnimation: GSAPTimeline;
let menuAnimationBack: GSAPTimeline;
function Menu() {
  // const menuRef = useRef(null);
  const componentRef = useRef(null);
  const navMainRef = useRef(null);
  const menuButtonRef = useRef(null);
  menuRefSignal.value = menuButtonRef;
  const links_to_top = useRef<HTMLDivElement>(null);
  const link_box = useRef([]);

  useGSAP(() => {
    gsap.set(menuButtonRef.current, {
      x: 200,
    });
    gsap.set(link_box.current, {
      y: 30,
    });

    menuAnimation = gsap.timeline({ paused: true });
    menuAnimationBack = gsap.timeline({ paused: true, reversed: true });

    let mqls = [
      window.matchMedia("(min-width: 769px)"),
      window.matchMedia("(min-width: 581px) and (max-width: 768px)"),
      window.matchMedia("(max-width: 580px)"),
    ];
    menuAnimation
      .to(
        navMainRef.current,
        // 0.8,
        {
          duration: 0.8,
          width: "100%",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          ease: Power2.easeInOut,
          transform: "translate3d(0,0,0)",
        },
        0
      )
      .to(
        link_box.current,
        {
          y: 0,
          ease: "power3.inout",
          stagger: {
            amount: 0.3,
            from: "end",
          },
        },
        "-=0.3"
      );

    menuAnimationBack
      .to(link_box.current, {
        y: 30,

        ease: "power3.inout",
        stagger: {
          amount: 0.3,
          from: "end",
        },
      })
      .to(
        navMainRef.current,
        {
          width: 0,
          clipPath: "polygon(100% 0, 100% 0, 100% 100%, 0 100%)",
          ease: Power4.easeIn,
          transform: "translate3d(0,0,0)",
        },
        "-=0.6"
      );
  }, []);

  function btn_clicked() {
    !menu_active ? open_menu() : close_menu();
  }
  function open_menu() {
    const isA = menuAnimationBack.isActive();
    // if (!isA) {
    menuAnimation.play(0);
    menu_active = !menu_active;
  }
  function close_menu() {
    const isA = menuAnimation.isActive();
    menuAnimationBack.play(0);
    menu_active = !menu_active;

    // links_to_top.current?.classList.toggle("links_to_top");
  }
  return (
    <div ref={componentRef}>
      <nav ref={navMainRef} id="nav-main" className="skew">
        <section>
          <div className="linksz" ref={links_to_top}>
            <ul>
              <li className="linkz">
                <div
                  className="linkz-box"
                  ref={(e: never) => link_box.current.push(e)}
                >
                  <a href="#">BNW</a>
                </div>
              </li>
              <li className="linkz">
                <div
                  className="linkz-box"
                  ref={(e: never) => link_box.current.push(e)}
                >
                  <a href="#">SEATTLE</a>
                </div>
              </li>
              <li className="linkz">
                <div
                  className="linkz-box"
                  ref={(e: never) => link_box.current.push(e)}
                >
                  <a href="#">JAPAN</a>
                </div>
              </li>
              <li className="linkz">
                <div
                  className="linkz-box"
                  ref={(e: never) => link_box.current.push(e)}
                >
                  <a href="#">FILM</a>
                </div>
              </li>
              <li className="linkz">
                <div
                  className="linkz-box"
                  ref={(e: never) => link_box.current.push(e)}
                >
                  <a href="#">ABOUT</a>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </nav>
      <button
        ref={menuButtonRef}
        id="menu-button"
        className="menu-button"
        onClick={() => btn_clicked()}
      >
        <div className="menu-buttonn">
          <span> MENU</span>
          <div
            className="menu-bars"
            id="menuBox"
            style={{ mixBlendMode: "exclusion" }}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Menu;

//   function mediaqueryresponse(mql: any) {
//     if (mqls[0].matches) {
//       menuAnimation
//         .to(
//           navMainRef.current,

//           {
//             width: 480,
//             clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
//             ease: Power2.easeInOut,
//             transform: "translate3d(0,0,0)",
//           },
//           0
//         )

//         .to(
//           link_box.current,
//           {
//             y: 0,
//             ease: "power3.inout",
//             stagger: {
//               amount: 0.3,
//               from: "end",
//             },
//           },
//           "-=0.3"
//         );
//     }
//     if (mqls[1].matches) {
//       menuAnimation
//         .to(
//           navMainRef.current,
//           // 0.8,
//           {
//             duration: 0.8,
//             width: "100%",
//             clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
//             ease: Power2.easeInOut,
//             transform: "translate3d(0,0,0)",
//           },
//           0
//         )
//         .to(
//           link_box.current,
//           {
//             y: 0,
//             ease: "power3.inout",
//             stagger: {
//               amount: 0.3,
//               from: "end",
//             },
//           },
//           "-=0.3"
//         );
//     }
//     if (mqls[2].matches) {
//       menuAnimation
//         .to(
//           navMainRef.current,

//           {
//             width: "100%",
//             clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
//             ease: Power2.easeInOut,
//             transform: "translate3d(0,0,0)",
//           },
//           0
//         )

//         .to(
//           link_box.current,
//           {
//             y: 0,
//             ease: "power3.inout",
//             stagger: {
//               amount: 0.3,
//               from: "end",
//             },
//           },
//           "-=0.3"
//         );
//     }
//   }

//   for (var i = 0; i < mqls.length; i++) {
//     mediaqueryresponse(mqls[i]);
//     mqls[i].addEventListener("change", (e) => {
//       mediaqueryresponse(e);
//     });
//   }
