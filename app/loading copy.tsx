import React from "react";
import styles from "./components/preloader/preloader.module.scss";
import dummy from "../public/dummy.png";
import Image from "next/image";
function Loading() {
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.title}>iycodes©</div>
        <div className={styles.box}>
          <div className={styles.ball}> </div>
          <div className={styles.line}></div>
          <svg
            style={{ visibility: "hidden", position: "absolute" }}
            width="35px"
            height="35px"
            viewBox="0 0 35 35"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>添加</title>
            <defs>
              <linearGradient
                x1="0%"
                y1="100%"
                x2="100%"
                y2="100%"
                id="linearGradient-1"
              >
                <stop stop-color="#FD9A5C" offset="0.0573645105%"></stop>
                <stop stop-color="#FBE6B7" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g
              id="页面-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="首页"
                transform="translate(-644.000000, -883.000000)"
                fill="url(#linearGradient-1)"
              >
                <g id="编组-4" transform="translate(625.000000, 864.000000)">
                  <g id="添加" transform="translate(18.500000, 19.000000)">
                    <path
                      d="M17.5,0 C19.709139,-4.05812251e-16 21.5,1.790861 21.5,4 L21.5,13.5 L31,13.5 C33.209139,13.5 35,15.290861 35,17.5 C35,19.709139 33.209139,21.5 31,21.5 L21.5,21.5 L21.5,31 C21.5,33.209139 19.709139,35 17.5,35 C15.290861,35 13.5,33.209139 13.5,31 L13.5,21.5 L4,21.5 C1.790861,21.5 0,19.709139 0,17.5 C0,15.290861 1.790861,13.5 4,13.5 L13.5,13.499 L13.5,4 C13.5,1.790861 15.290861,-4.82366169e-16 17.5,0 Z"
                      id="形状结合"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Loading;
