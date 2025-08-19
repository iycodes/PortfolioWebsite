import { useEffect, useLayoutEffect, useRef } from "react";
import "../global.scss";
import localFont from "next/font/local";
// import l from "../p"
// import { CustomEase, gsap, ScrollTrigger } from "@/app/lib/gsap/index";
import Image from "next/image";
import { Metadata } from "next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="html" lang="en">
      <meta name="keywords" content="iycodes, iyanuoluwa, fanoro" />
      {/* <meta name="description" content={desc} />
      <meta property="og:title" content="Iycodes" />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content="image_url_here" /> */}
      <body className="body">
        {/* <div id="smooth-wrapper"> */}
        {/* <div id="smooth-content"> */}
        {children}
        {/* </div> */}
        {/* </div> */}
      </body>
    </html>
  );
}

const desc =
  " Iyanuoluwa is an experienced software developer specializing in crafting efficient, user-focused applications. With a strong foundation in modern development practices and a drive for continuous improvement, Victor brings ideas to life through clean, robust code. Discover a portfolio featuring diverse projects, technical expertise, and a commitment to innovation.";

export const metadata: Metadata = {
  // metadataBase: new URL("http://localhost:3000"),
  title: "Iyanuoluwa Fanoro",
  description: desc,
  openGraph: {
    description: desc,
    // images: "url/ogImage.png",
  },
};
