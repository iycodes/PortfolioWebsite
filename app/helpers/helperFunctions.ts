import React from "react";

export const sleep = async (delay: number) => {
  await new Promise<void>((resolve) =>
    setTimeout(() => {
      console.log(`waited ${delay / 1000}s`);
      return resolve();
    }, delay)
  );
};
