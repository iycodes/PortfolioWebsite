import React from "react";
import { sleep } from "./helpers/helperFunctions";

export default async function Home() {
  await sleep(3000);
  return <div>Home</div>;
}
