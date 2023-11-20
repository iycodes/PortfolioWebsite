"use client";

import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("template started");

    return () => {
      console.log("ended");
    };
  });

  return <div>{children}</div>;
}
