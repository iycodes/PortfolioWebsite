import { useEffect } from "react";
import { sleep } from "./helpers/helperFunctions";
import Home from "./Home/Home";

function Template({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   console.log("template started");

  //   return () => {
  //     console.log("ended");
  //   };
  // });

  return <div>{children}</div>;
}

async function Homl() {
  // await sleep(3000);
  return <Home />;
}

export default Homl;
