"use client";
import React, { useRef } from "react";
import styles from "./Header.module.scss";
import { FaHome } from "react-icons/fa";
import {
  FaCode,
  FaCodeCommit,
  FaDownload,
  FaFilePdf,
  FaMessage,
  FaPhone,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import useIsomorphicLayoutEffect from "@/app/helpers/isomorphicEffect";
// import { gsap } from "@/app/lib/gsap";
import { gsap } from "@/app/lib/gsap";

import { signal } from "@preact/signals-core";

export const headerRefSignal = signal<React.LegacyRef<HTMLDivElement> | any>(
  null
);

function Header() {
  const headerReff = useRef(null);
  headerRefSignal.value = headerReff;
  return (
    <div ref={headerReff} className={styles.container}>
      <nav>
        <span>
          <span>Home</span> <FaHome />
        </span>
        <span>
          <span>Resume</span> <FaFilePdf />
        </span>
        <span>
          <span>Projects</span> <FaCode />
        </span>
        <span>
          <span>Contact</span> <MdEmail />
        </span>
      </nav>
    </div>
  );
}

export default Header;
